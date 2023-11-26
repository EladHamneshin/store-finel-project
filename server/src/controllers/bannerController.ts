import productsService from "../services/productsService.js";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import bannerService from "../services/bannerService.js";


const getBannersTop = async (_req :Request, res:Response) => {  
    const top5Products = await bannerService.getTopBanners();
    console.log('controll');
    res.json(top5Products);
  }
const getBannersLeft = async (_req :Request, res:Response) => {  
    const top5Products = await bannerService.getSideBanners();
    console.log('controll');
    res.json(top5Products);
  }
const getBannersRight = async (_req :Request, res:Response) => {  
    const top5Products = await bannerService.getRightBannersFromBannerTeam();
    console.log('controll');
    res.json(top5Products);
  }



export default { getBannersLft: getBannersLeft,getBannersRight,getBannersTop}