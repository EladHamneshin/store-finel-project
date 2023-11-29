import express from "express";
import productcontrollers from "../controllers/productsControllers.js";
import { authHandler } from "../middlewares/authMiddleware.js";

const productRouter = express.Router();

productRouter.get('/topFiveProducts', productcontrollers.getTop5Products);
productRouter.get('/top5ForCategory/:name', productcontrollers.getTop5ForCategory);
productRouter.get('/:pid', productcontrollers.getProductByID);
productRouter.get('/:pid/reviews',productcontrollers.getReviewsFromDB)
productRouter.get('/:pid/reviews/feedback',productcontrollers.feedbackReviews)
productRouter.post('/:pid/reviews',productcontrollers.saveReviewsToDB)

export default productRouter;
