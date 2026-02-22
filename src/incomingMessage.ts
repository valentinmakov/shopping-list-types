import type {UserId} from './id';
import type {MessageData} from './messageData';

export type IncomingMessage =
  | {uuid: string; type: 'hello'; userId: UserId}
  | {uuid: string; type: 'init'; userId: UserId; data: MessageData | null}
  | {uuid: string; type: 'update'; userId: UserId; data: MessageData | null};
