
import RequestError from '../../types/errors/RequestError.js';
import cartService from '../../services/cartService.js';
import Product from '../../types/Product.js';
import Cart from '../../types/Cart.js';


interface ResolverArgs {
    userId: string;
    product: Product;
    quantityOfProduct: number; 
    metaDate: {
        pid: string;
        action: string;
    } 
    pid: string;
    cart: Cart;
}


export const cartResolvers = {
    Query: {

        getCart: async (_: any, { userId }: ResolverArgs) => {
            try {
                const cart = await cartService.getCart(userId);
                return cart;
            } catch (error) {
                throw new RequestError('Failed to get shopping cart', 500);
            }
        }
    },

    Mutation: {

        updateCart: async (_: any, { userId, product, quantityOfProduct }: ResolverArgs) => {
            try {
                const cart = await cartService.updateCart(userId, product, quantityOfProduct);
                return cart;
            } catch (error) {
                throw new RequestError('Failed to update shopping cart', 500);
            }
        },

        deleteCart: async (_: any, { userId }: ResolverArgs) => {
            try {
                const emptyCart = await cartService.deleteCart(userId);
                return emptyCart;
            } catch (error) {
                throw new RequestError('Failed to delete shopping cart', 500);
            }
        },

        patchAmount: async (_: any, { userId, metaDate }: ResolverArgs) => {
            try {
                const cart = await cartService.patchAmount(userId, metaDate);
                return cart;
            } catch (error) {
                throw new RequestError('Failed to patch amount in shopping cart', 500);
            }
        },

        deleteCartItem: async (_: any, { userId, pid }: ResolverArgs) => {
            try {
                const cart = await cartService.deleteCartItem(userId, pid);
                return cart;
            } catch (error) {
                throw new RequestError('Failed to delete item from shopping cart', 500);
            }
        },

        sendCart: async (_: any, { cart }: ResolverArgs) => {
            try {
                const omsCart = await cartService.sendToOms(cart);
                return omsCart;
            } catch (error) {
                throw new RequestError('Failed to send shopping cart to OMS', 500);
            }
        }

    }
};


