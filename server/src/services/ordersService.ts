import STATUS_CODES from '../utils/StatusCodes.js';
import RequestError from '../types/errors/RequestError.js';
import Cart from '../types/Cart.js';
import ordersDal from '../dal/ordersDal.js';

const sendToOms = async ( cart: Cart) => {
  const orders = await ordersDal.sendToOms(cart);
  if (!orders)
  throw new RequestError('Categorys not found', STATUS_CODES.NOT_FOUND);
  return orders;
};

const getOrdersFromOms = async () => {
  const orders = await ordersDal.getFromOms();
  if (!orders)
  throw new RequestError('Categorys not found', STATUS_CODES.NOT_FOUND);
return orders;
};





export default { sendToOms ,getOrdersFromOms};
