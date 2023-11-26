import asyncHandler from 'express-async-handler';
import STATUS_CODES from '../utils/StatusCodes.js';
import cartService from '../services/cartService.js';

// @desc    Get shopping cart
// @route   GET /api/users/cart
// @access  Private
const getCart = asyncHandler(async (req, res) => {
  const { userId } = req.body
  const cart = await cartService.getCart(userId);
  res.json(cart);
});

const updateCart = asyncHandler(async (req, res) => {
  console.log("hi from update cart");
  
  const {userId, itemId, quantity} = req.body
  const cart = await cartService.updateCart(userId, itemId, quantity);
  res.status(STATUS_CODES.CREATED).json(cart);
});





export default { getCart, updateCart,
 };
