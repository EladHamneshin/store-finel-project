import Cart from "../types/Cart.js";
import axios from "axios";

const sendToOms = async (cart: Cart) => {
  const res = await axios.post("localhost:3000/api/cart", cart);
  console.log("hi");
  return res;
};

const getFromOms = async () => {
  const res = await axios.get("localhost:3000/api/orders");
  return res.data;
};

export default {
  sendToOms,
  getFromOms
};
