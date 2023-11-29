import asyncHandler from 'express-async-handler';
import STATUS_CODES from '../utils/StatusCodes.js';
import ordersService from '../services/ordersService.js';


//OMS
const sendCart = asyncHandler(async (req, res) => {
  const { order } = req.body
  const data = await ordersService.sendToOms(order);
  res.status(STATUS_CODES.CREATED).json(data);
});

const getOrders = asyncHandler(async (req, res) => {
  const cart = await ordersService.getOrdersFromOms(req);
  res.status(STATUS_CODES.CREATED).json(cart);
});



export default {
  sendCart, getOrders
};
