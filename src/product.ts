import type {ProductId} from './id';
import type {EntityMeta} from './entityMeta';
import type {ProductColorType} from './productColorType';

export type Product = EntityMeta<ProductId> & {
    color?: ProductColorType;
};
