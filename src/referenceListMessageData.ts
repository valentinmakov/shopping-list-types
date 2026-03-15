import type {ProductId, ReferenceListId} from './id';
import type {EntityMeta} from './entityMeta';

/** ReferenceList shape in message payloads (products as array). */
export type ReferenceListMessageData = EntityMeta<ReferenceListId> & {
    products: ProductId[];
};
