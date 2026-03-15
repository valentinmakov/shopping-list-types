import type {
    ListId,
    ProductId,
    ReferenceListId,
} from './id';
import type {ListMessageData} from './listMessageData';
import type {Product} from './product';
import type {ReferenceListMessageData} from './referenceListMessageData';

/** Payload in messages: ShoppingState-like without users; lists/products/referenceLists optional; list ids as arrays. */
export type MessageData = {
    lists?: Record<ListId, ListMessageData>;
    products?: Record<ProductId, Product>;
    referenceLists?: Record<ReferenceListId, ReferenceListMessageData>;
};
