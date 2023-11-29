import STATUS_CODES from '../utils/StatusCodes.js';
import RequestError from '../types/errors/RequestError.js';
import { OrderInterface } from '../types/order.js';
import ordersDal from '../dal/ordersDal.js';

const sendToOms = async ( order:OrderInterface) => {
  const orders = await ordersDal.sendToOms(order);
  if (!orders)
  throw new RequestError('Categorys not found', STATUS_CODES.NOT_FOUND);
  return orders;
};

const getOrdersFromOms = async (req: any) => {
  const { userId } = req.body
  const orders = await ordersDal.getFromOms(userId);
  if (!orders)
  throw new RequestError('Categorys not found', STATUS_CODES.NOT_FOUND);
return orders;
};





export default { sendToOms ,getOrdersFromOms};
