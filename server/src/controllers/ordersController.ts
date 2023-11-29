import asyncHandler from 'express-async-handler';
import STATUS_CODES from '../utils/StatusCodes.js';
import ordersService from '../services/ordersService.js';


//OMS
const sendCart = asyncHandler(async (req, res) => {
  const { order } = req.body
  try {
    const data = await ordersService.sendToOms(order);
    res.status(STATUS_CODES.CREATED).json(data);
    } catch (error) {
    console.log(error);
  }
});

const getOrders = asyncHandler(async (req, res) => {
  const {id} = req.params
  try {
    const data = await ordersService.getOrdersFromOms(id);
    res.status(STATUS_CODES.CREATED).json(data);
    } catch (error) {
    console.log(error);
  }});



export default {
  sendCart, getOrders
};
