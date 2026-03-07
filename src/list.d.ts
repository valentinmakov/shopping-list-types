import type {ListId, ProductId} from './id';
import type {EntityMeta} from './entityMeta';
export type List = EntityMeta<ListId> & {
    pending: Set<ProductId>;
    purchased: Set<ProductId>;
    /** Per-list product id → comment */
    comments: Record<ProductId, string>;
};
//# sourceMappingURL=list.d.ts.map
