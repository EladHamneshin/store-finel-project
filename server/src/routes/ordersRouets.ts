import express from 'express';
import { authHandler } from '../middlewares/authMiddleware.js';
import ordersControllers from '../controllers/ordersController.js';

const ordersRouter = express.Router();


// cartRouter.use(authHandler);

ordersRouter.post('/checkout', ordersControllers.sendCart);
ordersRouter.get('/allOrders', ordersControllers.sendCart);

export default ordersRouter;
