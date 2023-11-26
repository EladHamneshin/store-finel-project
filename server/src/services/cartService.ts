import STATUS_CODES from '../utils/StatusCodes.js';
import RequestError from '../types/errors/RequestError.js';
import { Types } from 'mongoose';
import cartDal from '../dal/cartDal.js';
import CartItem from '../types/CartItem.js';
import Cart from '../types/Cart.js';

const getCart = async (userId: string) => {
  // console.log("hi from gatcart in service:", userId);
  const cart = await cartDal.getCart(userId);
  if (!cart) throw new RequestError('No cart found', STATUS_CODES.NO_CONTENT);
  return cart;
};

const updateAmount = async (userId: string, itemId: string, quantity:number) => {
  const cart = await cartDal.getCartProducts(userId, itemId);
  if(!cart) throw new RequestError('No cart found', STATUS_CODES.NO_CONTENT);
  
  const prodInCart = cart.find(prod => prod.product_id.toString() === itemId.toString());
  if(!prodInCart){
    // cart.items.push(itemId);
    const newItemInCart = await cartDal.updateCart(userId, itemId, quantity);
    if (!newItemInCart) throw new RequestError('Cart update failed', STATUS_CODES.INTERNAL_SERVER_ERROR);
    return newItemInCart
  }
  
  const updatedCart = await cartDal.updateAmount(userId, itemId.toString(), quantity);
  if(!updatedCart)
    throw new RequestError('Cart not found', STATUS_CODES.NO_CONTENT);

  return updatedCart;
};

const updateCart = async (userId: string, product_id: string, quantity:number) => {
  console.log("hi from service updateCart:", userId, product_id, quantity);
  const cartRes = await cartDal.updateCart(userId, product_id, quantity);
  
  if (cartRes.length === 0)
    throw new RequestError(
      'Cart update failed',
      STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  return cartRes;
};


const sendToOms = async ( cart: Cart) => {
  const omsCart = await cartDal.sendToOms(cart);
  return omsCart;
};


const deleteCart = async (userId: string) => {

  const cart = await cartDal.deleteCart(userId);
  if (!cart) throw new RequestError('No cart found', STATUS_CODES.NO_CONTENT);
  return cart;
};

const deleteCartItem = async (userId: string, productId: string) => {
  const cart = await cartDal.deleteCartItem(userId, productId);
  if (!cart) throw new RequestError('No cart found', STATUS_CODES.NO_CONTENT);
  return cart;
}
const patchAmount = async (
  userId: string,
  metaDate: { pid: string; action: string }
) => {
  if (metaDate.action === 'inc')
    return await cartDal.incAmount(userId, metaDate.pid);
  return await cartDal.decAmount(userId, metaDate.pid);
};

export default { getCart,updateAmount, updateCart, deleteCart, deleteCartItem, patchAmount,sendToOms };
