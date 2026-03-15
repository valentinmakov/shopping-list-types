import type {ProductId, ReferenceListId} from './id';
import type {EntityMeta} from './entityMeta';

export type ReferenceList = EntityMeta<ReferenceListId> & {
    products: Set<ProductId>;
};
