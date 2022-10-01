import { AppAuthentication, createAppAuth } from '@octokit/auth-app';
import { Octokit } from '@octokit/rest';
import { App, AppMetaGithub, PrismaClient, User } from '@prisma/client';
import { Injectable } from '@tsed/di';
import { Unauthorized } from '@tsed/exceptions';
import fetch from 'node-fetch';
import { injectable } from 'tsyringe';
import { deployAppQueue } from '../../../../queues/deployApp';
import { synchroniseServerQueue } from '../../../../queues/synchroniseServer';
import { Branch } from '../models/branch.model';
import { GithubPagination } from '../models/github_pagination.model';
import { Installation } from '../models/installation.model';
import { formatGithubPem } from './../../../../config';
import {
  GITHUB_APP_CLIENT_ID,
  GITHUB_APP_CLIENT_SECRET,
  GITHUB_APP_ID,
  GITHUB_APP_PEM,
  NUMBER_USERS_ALLOWED,
} from './../../../../constants';
import { GithubError } from './../models/github_error';
import { GithubOAuthLoginResponse } from './../models/github_oauth_login_response';
import { Repository } from './../models/repository.model';

@Injectable()
@injectable()
export class GithubRepository {
  constructor(private prisma: PrismaClient) {}

  private installationAuth = createAppAuth({
    appId: GITHUB_APP_ID,
    privateKey: formatGithubPem(GITHUB_APP_PEM),
    clientId: GITHUB_APP_CLIENT_ID,
    clientSecret: GITHUB_APP_CLIENT_SECRET,
  });

  async createApp(
    installationId: string,
    appName: string,
    repoFullName: string,
    repoId: string,
    user: User,
    branch?: string
  ): Promise<App> {
    const installationAuthentication = (await this.installationAuth({
      type: 'installation',
      installationId,
    })) as AppAuthentication;

    const fullName = repoFullName.split('/');

    const repoData = {
      owner: fullName[0],
      repoName: fullName[1],
    };

    return this.prisma.app
      .create({
        data: {
          userId: user.id,
          name: appName,
          type: 'GITHUB',
          AppMetaGithub: {
            create: {
              repoName: repoData.repoName,
              repoOwner: repoData.owner,
              repoId,
              githubAppInstallationId: installationId,
              branch: branch ? branch : 'main',
            },
          },
        },
        include: {
          AppMetaGithub: true,
        },
      })
      .then(async (res) => {
        await deployAppQueue.add('deploy-app', {
          appId: res.id,
          userName: user.username,
          token: installationAuthentication.token,
        });

        return res;
      });
  }

  async repository(installationId: string, repoFullName: string) {
    const installationAuthentication = (await this.installationAuth({
      type: 'installation',
      installationId,
    })) as AppAuthentication;

    const octo = new Octokit({
      auth: installationAuthentication.token,
    });

    const fullName = repoFullName.split('/');

    const repoData = {
      owner: fullName[0],
      repoName: fullName[1],
    };

    return octo.repos
      .get({
        owner: repoData.owner,
        repo: repoData.repoName,
      })
      .then((res) => res.data);
  }

  async branch(installationId: string, repoFullName: string, branch: string) {
    const installationAuthentication = (await this.installationAuth({
      type: 'installation',
      installationId,
    })) as AppAuthentication;

    const octo = new Octokit({
      auth: installationAuthentication.token,
    });

    const fullName = repoFullName.split('/');

    const repoData = {
      owner: fullName[0],
      repoName: fullName[1],
    };

    return octo.repos
      .getBranch({
        owner: repoData.owner,
        repo: repoData.repoName,
        branch: branch,
      })
      .then((res) => res.data);
  }

  async repositories(
    installationId: string,
    per_page = 30,
    page = 1
  ): Promise<GithubPagination<'repositories', Repository>> {
    const installationAuthentication = (await this.installationAuth({
      type: 'installation',
      installationId,
    })) as AppAuthentication;

    const octo = new Octokit({
      auth: installationAuthentication.token,
    });

    return octo
      .request('GET /installation/repositories', {
        per_page,
        page,
      })
      .then((res) => res.data);
  }

  async installations(
    token: string,
    per_page = 30,
    page = 1
  ): Promise<GithubPagination<'installations', Installation>> {
    const octo = new Octokit({
      auth: token,
    });

    return octo
      .request('GET /user/installations', {
        per_page,
        page,
      })
      .then((res) => res.data);
  }

  async loginOAuthApp(
    code: string
  ): Promise<GithubOAuthLoginResponse | GithubError> {
    return fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: GITHUB_APP_CLIENT_ID,
        client_secret: GITHUB_APP_CLIENT_SECRET,
        code,
        state: 'github_login',
      }),
    }).then((res) => res.json());
  }

  async getUserByAccessToken(access_token: string): Promise<User> {
    const octokit = new Octokit({
      auth: access_token,
    });

    const { data } = await octokit.users.getAuthenticated();

    return await this.prisma.user.findUnique({
      where: { githubId: data.node_id },
    });
  }

  async getUser(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async createUser(oauthData: GithubOAuthLoginResponse): Promise<User> {
    const userCount = await this.prisma.user.count();
    if (userCount >= NUMBER_USERS_ALLOWED) {
      throw new Unauthorized('Numero de usuarios excedido');
    }

    const octokit = new Octokit({
      auth: oauthData.access_token,
    });

    const { data: emails } = await octokit.users.listEmailsForAuthenticated();
    const { data: githubUser } = await octokit.users.getAuthenticated();

    const email = emails.find((email) => email.primary);

    const now = new Date();
    const time = now.getTime();
    const refreshTokenExpiresAt = new Date(
      time + (oauthData?.refresh_token_expires_in ?? 0)
    );

    return await this.prisma.user
      .create({
        data: {
          username: githubUser.login,
          avatarUrl: githubUser.avatar_url,
          email: email.email,
          githubAccessToken: oauthData.access_token,
          refreshToken: oauthData.refresh_token,
          refreshTokenExpiresAt,
          githubId: githubUser.node_id,
        },
      })
      .then(async (res) => {
        await synchroniseServerQueue.add('synchronise-server', {});
        return res;
      });
  }

  async appMeta(id: string): Promise<AppMetaGithub> {
    return this.prisma.app
      .findUnique({
        where: { id },
      })
      .AppMetaGithub();
  }

  async branches(
    username: string,
    repositoryName: string,
    installationId: string
  ): Promise<Branch[]> {
    const installationAuthentication = (await this.installationAuth({
      type: 'installation',
      installationId,
    })) as AppAuthentication;

    const octo = new Octokit({
      auth: installationAuthentication.token,
    });

    return (
      await octo.request(`GET /repos/${username}/${repositoryName}/branches`)
    ).data;
  }
}
