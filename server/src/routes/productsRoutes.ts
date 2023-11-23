import express from "express";
import productcontrollers from "../controllers/productsControllers.js";
import { authHandler } from "../middlewares/authMiddleware.js";

const productRouter = express.Router();

productRouter.get('/topFiveProducts', productcontrollers.getTop5Products);
productRouter.get('/:pid', productcontrollers.getProductByID);
productRouter.post('/:pid/review',productcontrollers.reviews)

export default productRouter;
