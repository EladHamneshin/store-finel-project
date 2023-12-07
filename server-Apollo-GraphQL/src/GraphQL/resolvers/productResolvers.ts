import productsService from "../../services/productsService.js";
import Product from "../../types/Product.js";
import RequestError from "../../types/errors/RequestError.js";

interface ResolverArgs {
  id: string;
  search: string;
  name: string;
}

export const productResolvers = {
  Query: {

    getProductByID: async (_: any, { pid }: { pid: string }) => {
      try {
        const product = await productsService.getProductByID(pid);
        return product;
      } catch (error) {
        throw new RequestError("Failed to fetch product by ID", 500);
      }
    },

    getTop5Products: async () => {
      try {
        const top5Products = await productsService.getTop5Products();
        return top5Products;
      } catch (error) {
        throw new RequestError("Failed to fetch top 5 products", 500);
      }
    },

    getProductBySearch: async (_: any, { searchItem }: { searchItem: string }) => {
      try {
        const result = await productsService.getProductBySearch(searchItem);
        return result;
      } catch (error) {
        throw new RequestError("Failed to fetch product by search", 500);
      }
    },

    async getProductsByCategory(_: any, { name }: ResolverArgs): Promise<Product[] | undefined> {
      try {
        const category = await productsService.getProductsByCategory(name);
        return category;
      } catch (error) {
        throw new Error(`Failed to fetch category: ${name}`);
      }
    },

  }
};