import categoriesDAL from "../../dal/categoriesDal.js";
import Category from "../../types/Category.js";

interface ResolverArgs {
    name: string;
}

export const categoriesResolver = {
    Query: {
        async getCategories(): Promise<Category[] | undefined> {
            try {
              const categories = await categoriesDAL.getCategories();
              return categories;
            } catch (error) {
              throw new Error(`Failed to fetch categorys`);
            }
          },
        async getCategoryByName(_: any, { name }: ResolverArgs): Promise<Category | undefined> {
            try {
              const category = await categoriesDAL.getCategoryByName(name);
              return category;
            } catch (error) {
              throw new Error(`Failed to fetch top 5 products for category: ${name}`);
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