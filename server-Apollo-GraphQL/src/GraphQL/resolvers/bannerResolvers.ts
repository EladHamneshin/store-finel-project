import RequestError from '../../types/errors/RequestError.js';
import bannerService from "../../services/bannerService.js";

interface ResolverArgs {
    userID: string;
}


export const bannerResolvers = {
  Query: {

    getBannersSide: async () => {
      try {
        console.log('controller banner');
        const banner = await bannerService.getSideBannersFromBannerTeam();
        return banner.data;
      } catch (error) {
        throw new RequestError('Failed to get shopping cart', 500);
      }
    },

    getBannersTop: async () => {
      try {
        const banner = await bannerService.getTopBanners();
        return banner.data;
      } catch (error) {
        throw new RequestError('Failed to get shopping cart', 500);
      }
    },

    getBannersAll: async (_: any, { userID }: ResolverArgs) => {
      try {
        const top5Products = await bannerService.getAllBanners(userID);
        return top5Products.data;
      } catch (error) {
        throw new RequestError('Failed to get shopping cart', 500);
      }
    },

  },
};


