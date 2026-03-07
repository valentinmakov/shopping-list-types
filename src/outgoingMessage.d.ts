import type {MessageData} from './messageData';
export type OutgoingMessage =
    | {
          uuid: string;
          type: 'confirmed';
          data: null;
      }
    | {
          uuid: string;
          type: 'delta';
          data: MessageData;
      }
    | {
          uuid: string;
          type: 'overwrite';
          data: MessageData;
      };
//# sourceMappingURL=outgoingMessage.d.ts.map
