import express from 'express';
import { authHandler } from '../middlewares/authMiddleware.js';
import cartController from '../controllers/cartController.js';

const cartRouter = express.Router();


cartRouter.use(authHandler);

cartRouter.post('/cart', cartController.getCart);
cartRouter.post('/cart', cartController.updateCart);
cartRouter.post('/checkout', cartController.sendCart);
cartRouter.delete('/cart', cartController.deleteCart);
cartRouter.delete('/:pid', cartController.deleteCartItem);
cartRouter.patch('/cart ', cartController.patchAmount);

export default cartRouter;
