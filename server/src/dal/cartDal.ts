import { Types } from 'mongoose';
// import cartModel from '../models/cartModel.js';
// import productModel from '../models/productModel.js';
import Cart from '../types/Cart.js';
import pg from "pg";
const { Pool } = pg;
import { connectionString } from "../configs/db.js";

// const b = productModel.find();

// const createCart = async (userId: Types.ObjectId) => {
//   return await cartModel.create({ user: userId });
// };

const getCart = async (userId: Types.ObjectId) => {
  const query = 'SELECT * FROM cartitems WHERE userid ::text = $1';
  const values = [userId];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result from getCart:', rows);
  const array = []
  array[0] = {"items":rows}
  return array;
};

const getCartProducts = async (userId: Types.ObjectId) => {
  // return await cartModel.findOne({ user: userId });
};

const updateCart = async (userId: Types.ObjectId, items: Cart['items']) => {
  // return await cartModel.findOneAndUpdate(
  //   { user: userId },
  //   { items: items },
  //   { new: true }
  // );
};

const updateAmount = async (userId: Types.ObjectId, product_id: string, amount: number) => {
  // return await cartModel.findOneAndUpdate(
  //   { user: userId, 'items.product_id': product_id },
  //   { $inc: { 'items.$.quantity': amount } },
  //   { new: true }
  // );
};
const deleteCart = async (userId: Types.ObjectId) => {
  // return await cartModel.findOneAndUpdate(
  //   { user: userId },
  //   { items: [] },
  //   { new: true }
  // );
};

const deleteCartItem = async (userId: Types.ObjectId, productId: string) => {
  // return await cartModel.findOneAndUpdate(
  //   { user: userId },
  //   { $pull: { items: { product_id: productId } } },
  //   { new: true }
  // );
};

const incAmount = async (userId: Types.ObjectId, product_id: string) => {
  // return await cartModel.findOneAndUpdate(
  //   { user: userId, 'items.product_id': product_id },
  //   { $inc: { 'items.$.quantity': 1 } },
  //   { new: true }
  // );
};

const decAmount = async (userId: Types.ObjectId, product_id: string) => {
  // return await cartModel.findOneAndUpdate(
  //   { user: userId, 'items.product_id': product_id },
  //   { $inc: { 'items.$.quantity': -1 } },
  //   { new: true }
  // );
};

const sendQueryToDatabase = async (query: string, values: any[]): Promise<any> => {
  const pool = new Pool({connectionString: connectionString})
  const res = await pool.connect()
  const data = await res.query(query, values).catch(err => console.log(err));
  res.release()
  return data
}

export default {
  getCart,
  getCartProducts,
  updateCart,
  deleteCart,
  updateAmount,
  deleteCartItem,
  incAmount,
  decAmount,
};
