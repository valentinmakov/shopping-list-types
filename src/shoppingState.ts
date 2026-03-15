import type {
    ListId,
    ProductId,
    ReferenceListId,
    UserId,
} from './id';
import type {List} from './list';
import type {Product} from './product';
import type {ReferenceList} from './referenceList';

/** Main tree: normalized in-memory state (effectively DB contents). */
export type ShoppingState = {
    lists: Record<ListId, List>;
    products: Record<ProductId, Product>;
    referenceLists: Record<ReferenceListId, ReferenceList>;
    users: Set<UserId>;
};
