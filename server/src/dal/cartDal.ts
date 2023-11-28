import { Types } from 'mongoose';
import Cart from '../types/Cart.js';
import axios from 'axios';
import type Product from "../types/Product.js";
import pg, { QueryResult } from "pg";
import { string } from 'joi';
const { Pool } = pg;
import { connectionString } from "../server.js";
// const b = productModel.find();
const createCart = async (userId: string) => {
  // return await cartModel.create({ user: userId });
};
const getCart = async (userId: string) => {
  const query = 'SELECT * FROM cartitems WHERE userid ::text = $1';
  const values = [userId];
  const res = await sendQueryToDatabase(query, values)
  // console.log("hi from gatcart in Dal:", userId);
  const { rows } = res
  console.log('Query result from getCart:', rows);
  const array = []
  array[0] = {"items":rows}
  return array;
};
const getCartProducts = async (userId: string, itemId: string):Promise<Product[]> => {
  const query = 'SELECT * FROM cartitems WHERE userid ::text = $1 AND productid = $2';
  const values = [userId, itemId];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result from getCartProducts:', rows);
  return rows;
};
const updateCart = async (userId: string, productid: string, quantity: number) => {
  // console.log("hi from dal updatecart");
  const query = `INSERT
  INTO cartitems
  (userid, productid, quantity)
  VALUES
  ($1, $2, $3)
  ON CONFLICT (userid, productid) DO UPDATE
  SET quantity = cartitems.quantity + $3
  RETURNING *`
  const values = [userId, productid, quantity];
  console.log("values:", values);
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result from updateCart:', rows);
  const array = []
  array[0] = {"items":rows}
  console.log("hi from cartDal, array.items.length:", array[0].items.length);
  return array;
};
const updateAmount = async (userId: string, productid: string, quantity: number) => {
  const query = `INSERT
  INTO cartitems
  (userid, productid, quantity)
  VALUES
  ($1, $2, $3)
  ON CONFLICT (userid, productid) DO UPDATE
  SET quantity = cartitems.quantity + $3
  RETURNING *`
  const values = [userId, productid, quantity];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result from updateAmount:', rows);
  return rows;
};
const sendToOms = async (cart: Cart) => {
  const res = await axios.post('localhost:3000/api/cart', cart)
  console.log('hi')
  return res
}

const deleteCart = async (userId: string) => {
  const query = `DELETE FROM cartitems
                WHERE userid ::text = $1
                RETURNING *`
  const values = [userId];
  const res = await sendQueryToDatabase(query, values)
  const { rowCount } = res
  console.log('Query result from updateAmount:', rowCount);
  return rowCount;
};

const deleteCartItem = async (userId: string, productId: string) => {
  const query = `DELETE FROM cartitems
                WHERE userid ::text = $1 AND productid = $2
                RETURNING *;`
  const values = [userId, productId];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result from updateAmount:', rows);
  return rows;

};
const incAmount = async (userId: string, productid: string) => {
  console.log("hello from incAmount");
  const query = `INSERT
  INTO cartitems
  (userid, productid)
  VALUES
  ($1, $2)
  ON CONFLICT (userid, productid) DO UPDATE
  SET quantity = cartitems.quantity + 1
  RETURNING *`
  const values = [userId, productid];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result:', rows);
  return rows;
};
const decAmount = async (userId: string, productid: string) => {
  console.log("hello from decAmount");
  const query = `INSERT
  INTO cartitems
  (userid, productid)
  VALUES
  ($1, $2)
  ON CONFLICT (userid, productid) DO UPDATE
  SET quantity = cartitems.quantity - 1
  RETURNING *`
  const values = [userId, productid];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result:', rows);
  return rows;
};
const sendQueryToDatabase = async (query: string, values: any[]): Promise<any> => {
  const pool = new Pool({connectionString: connectionString})
  const res = await pool.connect()
  const data = await res.query(query, values).catch(err => console.log(err));
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