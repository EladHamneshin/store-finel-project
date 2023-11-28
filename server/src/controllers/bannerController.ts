import productsService from "../services/productsService.js";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import bannerService from "../services/bannerService.js";


const getBannersSide = async (_req: Request, res: Response) => {  
  const top5Products = await bannerService.getSideBannersFromBannerTeam(_req.userId as unknown as string);
  console.log('controll');
  res.json(top5Products);
}
const getBannersTop = async (_req: Request, res: Response) => {  
    const top5Products = await bannerService.getTopBanners(_req.userId as unknown as string);
    console.log('controll');
    res.json(top5Products);
  }
  
const getBannersAll = async (_req :Request, res:Response) => {  
    const top5Products = await bannerService.getAllBanners(_req.userId as unknown as string);
    console.log('controll');
    res.json(top5Products);
  }



export default { getBannersSide, getBannersTop, getBannersAll}