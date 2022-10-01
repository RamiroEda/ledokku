import { App, Database, PrismaClient } from '@prisma/client';
import { Injectable } from '@tsed/di';
import { injectable } from 'tsyringe';

@Injectable()
@injectable()
export class DatabaseRepository {
  constructor(private prisma: PrismaClient) {}

  get(id: string): Promise<Database> {
    return this.prisma.database.findUnique({
      where: { id },
    });
  }

  getAll(): Promise<Database[]> {
    return this.prisma.database.findMany();
  }

  delete(id: string): Promise<Database> {
    return this.prisma.database.delete({
      where: { id },
    });
  }

  async exists(name: string): Promise<boolean> {
    return (
      (await this.prisma.database.count({
        where: { name },
      })) > 0
    );
  }

  async databaseWithApps(
    databaseId: string,
    appId: string
  ): Promise<Database & { apps: App[] }> {
    return this.prisma.database.findUnique({
      where: {
        id: databaseId,
      },
      include: {
        apps: {
          where: {
            id: appId,
          },
        },
      },
    });
  }

  async linkedApp(databaseId: string, appId: string): Promise<App[]> {
    return this.prisma.database
      .findUnique({
        where: {
          id: databaseId,
        },
        select: {
          apps: {
            where: {
              id: appId,
            },
          },
        },
      })
      .apps();
  }

  async linkedApps(databaseId: string): Promise<App[]> {
    return this.prisma.database
      .findUnique({
        where: {
          id: databaseId,
        },
      })
      .apps();
  }
}
