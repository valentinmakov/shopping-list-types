import type {ListId, ProductId} from './id';
import type {EntityMeta} from './entityMeta';
/** List shape in message payloads (pending/purchased as arrays). */
export type ListMessageData = EntityMeta<ListId> & {
    pending: ProductId[];
    purchased: ProductId[];
    comments: Record<ProductId, string>;
};
//# sourceMappingURL=listMessageData.d.ts.map
