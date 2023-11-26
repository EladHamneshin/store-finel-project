import asyncHandler from 'express-async-handler';
import STATUS_CODES from '../utils/StatusCodes.js';
import ordersService from '../services/ordersService.js';


//OMS
const sendCart = asyncHandler(async (req, res) => {
  const cart = await ordersService.sendToOms(req.body);
  res.status(STATUS_CODES.CREATED).json(cart);
});

const getOrders = asyncHandler(async (req, res) => {
  const cart = await ordersService.getOrdersFromOms();
  res.status(STATUS_CODES.CREATED).json(cart);
});



export default { 
  sendCart,getOrders
 };
