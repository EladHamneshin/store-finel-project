import { Product } from './Product.ts';

interface Cart {
    _id: string;
    user: string;
    items: Product[];
}

export default Cart;
