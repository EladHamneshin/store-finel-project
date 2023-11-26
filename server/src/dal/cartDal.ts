import { Types } from 'mongoose';
import cartModel from '../models/cartModel.js';
import productModel from '../models/productModel.js';
import Cart from '../types/Cart.js';
import axios from 'axios';
import pg from "pg";
const { Pool } = pg;


const b = productModel.find();

const createCart = async (userId: string) => {
  return await cartModel.create({ user: userId });
};

const getCart = async (userId: string) => {

  const query = 'SELECT * FROM cartitems WHERE user_id ::text = $1';

  const values = [userId];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result:', rows);
  return res;
};

const getCartProducts = async (userId: string) => {
  return await cartModel.findOne({ user: userId });
};

const updateCart = async (userId: string, itemId: string, quantity: number) => {
  console.log(userId);

  const query = `INSERT
  INTO cartitems
  (user_id, product_id, quantity) 
  VALUES
  ($1, $2, $3) 
  ON CONFLICT (user_id, product_id) DO UPDATE
  SET quantity = $3
  RETURNING *`

  const values = [userId, itemId, quantity];
  const res = await sendQueryToDatabase(query, values)
  const { rowCount } = res
  console.log('Query result:', rowCount);
  return rowCount;
};

const updateAmount = async (userId: string, product_id: string, amount: number) => {
  return await cartModel.findOneAndUpdate(
    { user: userId, 'items.product_id': product_id },
    { $inc: { 'items.$.quantity': amount } },
    { new: true }
  );
};
const sendToOms = async (cart: Cart) => {
  const res = await axios.post('localhost:3000/api/cart', cart)
  console.log('hi')
  return res
};

const deleteCart = async (userId: string) => {
  return await cartModel.findOneAndUpdate(
    { user: userId },
    { items: [] },
    { new: true }
  );
};

const deleteCartItem = async (userId: string, productId: string) => {
  return await cartModel.findOneAndUpdate(
    { user: userId },
    { $pull: { items: { product_id: productId } } },
    { new: true }
  );
};

const incAmount = async (userId: string, product_id: string) => {
  return await cartModel.findOneAndUpdate(
    { user: userId, 'items.product_id': product_id },
    { $inc: { 'items.$.quantity': 1 } },
    { new: true }
  );
};

const decAmount = async (userId: string, product_id: string) => {
  return await cartModel.findOneAndUpdate(
    { user: userId, 'items.product_id': product_id },
    { $inc: { 'items.$.quantity': -1 } },
    { new: true }
  );
};

const sendQueryToDatabase = async (query: string, values: any[]) => {
  const pool = new Pool()
  const res = await pool.connect()
  const data = await res.query(query, values);
  res.release()
  return data

}

export default {
  createCart,
  getCart,
  getCartProducts,
  updateCart,
  deleteCart,
  updateAmount,
  deleteCartItem,
  incAmount,
  decAmount,
  sendToOms
};
