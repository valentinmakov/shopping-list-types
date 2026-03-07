import type {MessageData} from './messageData';

// TODO: add new response type (e.g. 'error') to report server failures to clients instead of sending 'confirmed'
export type OutgoingMessage =
    | {uuid: string; type: 'confirmed'; data: null}
    | {uuid: string; type: 'delta'; data: MessageData}
    | {uuid: string; type: 'overwrite'; data: MessageData};
