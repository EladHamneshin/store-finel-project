import axios from "axios";
import { OrderInterface } from "../types/order.js";
const banner = process.env.BANNER_BASE_URL;
const erp = process.env.ERP_BASE_URL;
const oms = process.env.OMS_BASE_URL;

const sendToOms = async (order: OrderInterface) => {
  const res = await axios.post(`${oms}api/orders`, order);
  return res.data.data;
};

const getFromOms = async (userId: string) => {
  const res = await axios.get(`${oms}api/orders/${userId}`);
  return res.data.data;
};

export default {
  sendToOms,
  getFromOms
};
