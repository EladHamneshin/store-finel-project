import categoriesDAL from "../../dal/categoriesDal.js";
import Category from "../../types/Category.js";


export const categoryResolvers = {
  Query: {

    async getCategories(): Promise<Category[] | undefined> {
      try {
        const categories = await categoriesDAL.getCategories();
        return categories;
      } catch (error) {
        throw new Error(`Failed to fetch categorys`);
      }
    },

    async getTop5ForCategories(): Promise<Category[] | undefined> {
      try {
        const categories = await categoriesDAL.getTop5Categories();
        return categories;
      } catch (error) {
        throw new Error(`Failed to fetch top 5 products for category`);
      }
    }
  }
};