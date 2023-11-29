import { Types } from 'mongoose';
import Cart from '../types/Cart.js';
import pg from "pg";
const { Pool } = pg;
import { connectionString } from "../configs/db.js";
import { date } from 'joi';



const getCart = async (userId: string) => {
  const query = 'SELECT * FROM cartitems WHERE userid ::text = $1';
  // const values = [userId];
  const values = ["001d9d40-03a9-4c47-bcfc-c641c776b346"];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result from getCart:', rows);
  const date = {"items":rows}
  return date;
};

const getCartProducts = async (userId: string) => {
  const query = 'SELECT * FROM cartitems WHERE userid ::text = $1';
  const values = [userId];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result from getCart:', rows);
  const date = {"items":rows}
  return date;
};

const updateCart = async (userId: string, items: any) => {
  const { quantity } = items
  const product_id = "2233fbc5-f9e1-4ff1-b892-b17fe50fe326"
  const query = `INSERT
  INTO cartitems
  (userid, productid, quantityOfProduct)
  VALUES
  ($1, $2, $3)
  ON CONFLICT (userid, productid) DO UPDATE
  SET quantityOfProduct = cartitems.quantityOfProduct + $3
  RETURNING *`
  const values = [userId, product_id, quantity];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res  
  const date = {"items":rows}
  return date;
};

const updateAmount = async (userId: string, product_id: string, amount: number) => {
  return {}
  // return await cartModel.findOneAndUpdate(
  //   { user: userId, 'items.product_id': product_id },
  //   { $inc: { 'items.$.quantity': amount } },
  //   { new: true }
  // );
};
const deleteCart = async (userId: string) => {
  return {}
  // return await cartModel.findOneAndUpdate(
  //   { user: userId },
  //   { items: [] },
  //   { new: true }
  // );
};

const deleteCartItem = async (userId: string, productId: string) => {
  return {}
  // return await cartModel.findOneAndUpdate(
  //   { user: userId },
  //   { $pull: { items: { product_id: productId } } },
  //   { new: true }
  // );
};

const incAmount = async (userId: string, product_id: string) => {
  return {}
  // return await cartModel.findOneAndUpdate(
  //   { user: userId, 'items.product_id': product_id },
  //   { $inc: { 'items.$.quantity': 1 } },
  //   { new: true }
  // );
};

const decAmount = async (userId: string, product_id: string) => {
  return {}
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
