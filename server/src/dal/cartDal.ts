import { Types } from 'mongoose';
import cartModel from '../models/cartModel.js';
import productModel from '../models/productModel.js';
import Cart from '../types/Cart.js';
import axios from 'axios';
import type Product from "../types/Product.js";
import pg, { QueryResult } from "pg";
import { string } from 'joi';
const { Pool } = pg;


// const b = productModel.find();

const createCart = async (userId: string) => {
  // return await cartModel.create({ user: userId });
};

const getCart = async (userId: string) => {
  const query = 'SELECT * FROM cartitems WHERE user_id ::text = $1';
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
  const query = 'SELECT * FROM cartitems WHERE user_id ::text = $1 AND product_id = $2';
  const values = [userId, itemId];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result from getCartProducts:', rows);
  return rows;
};

const updateCart = async (userId: string, product_id: string, quantity: number) => {
  // console.log("hi from dal updatecart");
  
  const query = `INSERT
  INTO cartitems
  (user_id, product_id, quantity) 
  VALUES
  ($1, $2, $3) 
  ON CONFLICT (user_id, product_id) DO UPDATE
  SET quantity = cartitems.quantity + $3
  RETURNING *`

  const values = [userId, product_id, quantity];
  console.log("values:", values);
  
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result from updateCart:', rows);
  const array = []
  array[0] = {"items":rows}
  console.log("hi from cartDal, array.items.length:", array[0].items.length);
  return array;
};

const updateAmount = async (userId: string, product_id: string, quantity: number) => {
  const query = `INSERT
  INTO cartitems
  (user_id, product_id, quantity) 
  VALUES
  ($1, $2, $3) 
  ON CONFLICT (user_id, product_id) DO UPDATE
  SET quantity = cartitems.quantity + $3
  RETURNING *`

  const values = [userId, product_id, quantity];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result from updateAmount:', rows);
  return rows;

};
const sendToOms = async (cart: Cart) => {
  const res = await axios.post('localhost:3000/api/cart', cart)
  console.log('hi')
  return res
};

const deleteCart = async (userId: string) => {
  console.log("hello from deletecart");
  const res = await getCart(userId)
  if (res.length === 0) return res
};

const deleteCartItem = async (userId: string, productId: string) => {
  console.log("hello from deleteCartItem");
  return await cartModel.findOneAndUpdate(
    { user: userId },
    { $pull: { items: { product_id: productId } } },
    { new: true }
  );
};

const incAmount = async (userId: string, product_id: string) => {
  console.log("hello from incAmount");

  const query = `INSERT
  INTO cartitems
  (user_id, product_id, quantity) 
  VALUES
  ($1, $2, $3) 
  ON CONFLICT (user_id, product_id) DO UPDATE
  SET quantity = cartitems.quantity + 1
  RETURNING *`

  const values = [userId, product_id];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result:', rows);
  return rows;
};

const decAmount = async (userId: string, product_id: string) => {
  console.log("hello from decAmount");

  const query = `INSERT
  INTO cartitems
  (user_id, product_id, quantity) 
  VALUES
  ($1, $2, $3) 
  ON CONFLICT (user_id, product_id) DO UPDATE
  SET quantity = cartitems.quantity - 1
  RETURNING *`

  const values = [userId, product_id];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result:', rows);
  return rows;
};

const sendQueryToDatabase = async (query: string, values: any[]): Promise<any> => {
  const pool = new Pool()
  const res = await pool.connect()
  // console.log("hi from cartDal, sendQueryToDatabase:", values);
  const data = await res.query(query, values).catch(err => console.log(err));
  // console.log("hi from cartDal, sendQueryToDatabase:", data);
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
