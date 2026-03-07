import type {ListId, ProductId} from './id';
import type {ListMessageData} from './listMessageData';
import type {Product} from './product';

/** Payload in messages: ShoppingState-like without users; lists/products optional; list ids as arrays. */
export type MessageData = {
    lists?: Record<ListId, ListMessageData>;
    products?: Record<ProductId, Product>;
};
