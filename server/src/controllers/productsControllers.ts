import productsService from "../services/productsService.js";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { Types } from "mongoose";


// @desc    Get product by id
// @route   GET  /api/products/:pid
// @access  Public

//OMS
const getProductByID = asyncHandler(async (req: Request, res: Response) => {
    const {pid} = req.params
    const product = await productsService.getProductByID(pid)
    res.json(product)  
})


const getTop5Products = async (_req :Request, res:Response) => {  
    const top5Products = await productsService.getTop5Products();
    console.log('controll');
    res.json(top5Products);
  }

export default { getProductByID, getTop5Products}