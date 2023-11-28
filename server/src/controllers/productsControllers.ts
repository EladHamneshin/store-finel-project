import productsService from "../services/productsService.js";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";



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

    res.json(top5Products);
  }

const getTop5ForCategory = async (_req :Request, res:Response) => {  
    const top5Products = await productsService.getTop5Products();
    console.log('controll');
    res.json(top5Products);
  }


  const saveReviewsToDB = asyncHandler(async (req: Request, res: Response) => {
    console.log('this is review',req.body)} )


const getReviewsFromDB = asyncHandler(async (req: Request, res: Response) => {
    const {pid} = req.params
    const product = [
        {
            title: "Great Product",
            author: "John Doe",
            body: "Lorem ipsum...",
            rating: 5,
            thumbUp: 6,
            thumbDown: 4,
        },
        {
            title: "Another Product",
            author: "Jane Smith",
            body: "Lorem ipsum...",
            rating: 4,
            thumbUp: 3,
            thumbDown: 1,
        },
        {
            title: "Excellent Product",
            author: "Bob Johnson",
            body: "Lorem ipsum...",
            rating: 5,
            thumbUp: 8,
            thumbDown: 2,
        },
    ];
    res.json(product)  
    })

const feedbackReviews = asyncHandler(async (req: Request, res: Response) => {
    console.log('this is feedback',req.params.pid)} )


  

export default { getProductByID, getTop5Products, saveReviewsToDB, getReviewsFromDB,feedbackReviews,getTop5ForCategory}

