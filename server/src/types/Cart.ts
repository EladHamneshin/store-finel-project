import CartItem from './CartItem.js';

interface Cart {
    _id: string;
    user: string;
    items: CartItem[];
}

export default Cart;
