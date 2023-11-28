import bannerDal from "../dal/bannerDal.js";
import RequestError from "../types/errors/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";





const getSideBannersFromBannerTeam = async (userID: string) => {
    const banners = await bannerDal.getSideFromBanners(userID);
    if (!banners)
        throw new RequestError('Top5Products not found', STATUS_CODES.NOT_FOUND);
        console.log( 'service');
    return banners;
}
const getTopBanners= async (userID: string) => {
    const banners = await bannerDal.getTopFromBanners(userID);
    if (!banners)
        throw new RequestError('Top5Products not found', STATUS_CODES.NOT_FOUND);
        console.log( 'service');
    return banners;
}
const getAllBanners= async (userID: string) => {
    const banners = await bannerDal.getAllFromBanners(userID);
    if (!banners)
        throw new RequestError('Top5Products not found', STATUS_CODES.NOT_FOUND);
        console.log( 'service');
    return banners;
}

export default {getSideBannersFromBannerTeam, getTopBanners, getAllBanners }