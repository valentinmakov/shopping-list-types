import type {ProductId, ReferenceListId} from './id';
import type {EntityMeta} from './entityMeta';

export type ReferenceList = EntityMeta<ReferenceListId> & {
    products: Set<ProductId>;
    /** Optional description shown in the list item's info modal. */
    description?: string | null;
};
