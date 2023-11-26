import express from 'express';
import { authHandler } from '../middlewares/authMiddleware.js';
import cartController from '../controllers/cartController.js';

const cartRouter = express.Router();


cartRouter.use(authHandler);

cartRouter.post('/cart', cartController.getCart);
cartRouter.post('/cart', cartController.updateCart);

export default cartRouter;
