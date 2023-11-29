import asyncHandler from 'express-async-handler';
import STATUS_CODES from '../utils/StatusCodes.js';
import cartService from '../services/cartService.js';


const getCart = asyncHandler(async (req, res) => {
    const cart = await cartService.getCart(req.userId as unknown as string);
    res.json(cart);
});

// @desc    Update shopping cart
// @route   PUT /api/users/cart
// @access  Private
const updateCart = asyncHandler(async (req, res) => {
    const cart = await cartService.updateAmount(req.userId as unknown as string, req.body);
    res.status(STATUS_CODES.CREATED).json(cart);
});

// @desc    Delete shopping cart
// @route   DELETE /api/users/cart
// @access  Private
const deleteCart = asyncHandler(async (req, res) => {
    const emptyCart = await cartService.deleteCart(req.userId as unknown as string);
    res.json(emptyCart);
});

// @desc    Delete single item from shopping cart
// @route   DELETE /api/users/cart/:pid
// @access  Private
const deleteCartItem = asyncHandler(async (req, res) => {
    const cart = await cartService.deleteCartItem(req.userId as unknown as string, req.params.pid);
    res.json(cart);
});

// @desc    increase/decrease item quantity amount in cart
// @route   PATCH /api/users/cart
// @access  Private
const patchAmount = asyncHandler(async (req, res) => {
    const cart = await cartService.patchAmount(req.userId as unknown as string, req.body);
    res.json(cart);
});

export default { getCart, updateCart, deleteCart, patchAmount, deleteCartItem };
