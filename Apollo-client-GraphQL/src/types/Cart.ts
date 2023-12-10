import ProductCart from './ProductCart.ts';

interface Cart {
    _id: string;
    user: string;
    items: ProductCart[];
}

export default Cart;
