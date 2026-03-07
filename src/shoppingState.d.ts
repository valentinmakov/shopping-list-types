import type {ListId, ProductId, UserId} from './id';
import type {List} from './list';
import type {Product} from './product';
/** Main tree: normalized in-memory state (effectively DB contents). */
export type ShoppingState = {
    lists: Record<ListId, List>;
    products: Record<ProductId, Product>;
    users: Set<UserId>;
};
//# sourceMappingURL=shoppingState.d.ts.map
