import bannerDal from "../dal/bannerDal.js";
import RequestError from "../types/errors/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";





const getRightBannersFromBannerTeam= async () => {
    const banners = await bannerDal.getRightFromBanners();
    if (!banners)
        throw new RequestError('Top5Products not found', STATUS_CODES.NOT_FOUND);
        console.log( 'service');
    return banners;
}
const getTopBanners= async () => {
    const banners = await bannerDal.getTopFromBanners();
    if (!banners)
        throw new RequestError('Top5Products not found', STATUS_CODES.NOT_FOUND);
        console.log( 'service');
    return banners;
}
const getSideBanners= async () => {
    const banners = await bannerDal.getLftFromBanners();
    if (!banners)
        throw new RequestError('Top5Products not found', STATUS_CODES.NOT_FOUND);
        console.log( 'service');
    return banners;
}

export default {getRightBannersFromBannerTeam,getTopBanners,getSideBanners }