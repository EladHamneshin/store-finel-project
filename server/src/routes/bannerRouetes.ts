import express from "express";
import bannerontroller  from "../controllers/bannerController.js";

const bannerRoutes = express.Router();

bannerRoutes.get('/topBanners', bannerontroller.getBannersTop);
bannerRoutes.get('/rightBanners', bannerontroller.getBannersRight);
bannerRoutes.get('/leftBanners', bannerontroller.getBannersLft);

export default bannerRoutes;
