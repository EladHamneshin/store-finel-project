import productsService from "../services/productsService.js";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { Types } from "mongoose";



//OMS
const getProductAndReviewByID = asyncHandler(async (req: Request, res: Response) => {
    const {pid} = req.params
    const product = await productsService.getProductAndReviewByID(pid)
    res.json(product)  
})


const getTop5Products = async (_req :Request, res:Response) => {  
    const top5Products = await productsService.getTop5Products();
    console.log('controll');
    res.json(top5Products);
  }

// const getTop5ForCategory = async (_req :Request, res:Response) => {  
//     const top5Products = await productsService.getTop5Products();
//     console.log('controll');
//     res.json(top5Products);
//   }

export default { getProductByID, getTop5Products,getTop5ForCategory}

  const reviews = asyncHandler(async (req: Request, res: Response) => {
    console.log('this is review',req.body)} )

export default { getProductAndReviewByID, getTop5Products,reviews}

