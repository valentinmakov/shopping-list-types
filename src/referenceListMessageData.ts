import type {ProductId, ReferenceListId} from './id';
import type {EntityMeta} from './entityMeta';

/** ReferenceList shape in message payloads (products as array). */
export type ReferenceListMessageData = EntityMeta<ReferenceListId> & {
    products: ProductId[];
    /** Optional description shown in the list item's info modal. */
    description?: string | null;
};
