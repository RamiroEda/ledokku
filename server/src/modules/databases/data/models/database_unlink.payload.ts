import { Field, ObjectType } from 'type-graphql';
import { LogPayload } from '../../../../models/log_payload';

@ObjectType()
export class DatabaseUnlinkPayload {
  @Field((type) => LogPayload)
  unlinkDatabaseLogs: LogPayload;
}
