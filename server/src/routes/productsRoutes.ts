import express from "express";
import productcontrollers from "../controllers/productsControllers.js";
import { authHandler } from "../middlewares/authMiddleware.js";

const productRouter = express.Router();

productRouter.get('/topFiveProducts', productcontrollers.getTop5Products);
productRouter.get('/top5ForCategory', productcontrollers.getTop5ForCategory);
productRouter.get('/:pid', productcontrollers.getProductByID);

export default productRouter;
