import bannerDal from "../dal/bannerDal.js";
import RequestError from "../types/errors/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";





const getSideBannersFromBannerTeam = async (userId:string) => {
    const banners = await bannerDal.getSideFromBanners(userId);
    if (!banners)
        throw new RequestError('Top5Products not found', STATUS_CODES.NOT_FOUND);
        console.log( 'service');
    return banners;
}
const getTopBanners = async (userId:string) => {
    const banners = await bannerDal.getTopFromBanners(userId);
    if (!banners)
        throw new RequestError('Top5Products not found', STATUS_CODES.NOT_FOUND);
        console.log( 'service');
    return banners;
}
const getAllBanners= async (userId:string) => {
    const banners = await bannerDal.getAllFromBanners(userId);
    if (!banners)
        throw new RequestError('Top5Products not found', STATUS_CODES.NOT_FOUND);
        console.log( 'service');
    return banners;
}

export default { getSideBannersFromBannerTeam,getTopBanners,getAllBanners }