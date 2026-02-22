import type {ProductId} from './id';
import type {EntityMeta} from './entityMeta';

export type Product = EntityMeta<ProductId> & {
  color?: string;
};
