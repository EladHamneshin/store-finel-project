import productsService from "../services/productsService.js";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import bannerService from "../services/bannerService.js";


const getBannersSide = async (req :Request, res:Response) => {  
  const top5Products = await bannerService.getSideBannersFromBannerTeam(req.id as unknown as string);
  console.log('controll');
  res.json(top5Products);
}

const getBannersTop = async (req :Request, res:Response) => {  
    const top5Products = await bannerService.getTopBanners(req.id as unknown as string);
    console.log('controll');
    res.json(top5Products);
  }

const getBannersAll = async (req :Request, res:Response) => {  
    const top5Products = await bannerService.getAllBanners(req.id as unknown as string);
    console.log('controll');
    res.json(top5Products);
  }



export default { getBannersSide, getBannersAll,getBannersTop}