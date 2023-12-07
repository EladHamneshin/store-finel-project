import productsDAL from "../../dal/productsDal.js";
import Product from "../../types/Product.js";

interface ResolverArgs {
  id: string;
  search: string;
  name: string;
}

export const productsResolver = {
  Query: {
    async getProductByID(_: any, { id }: ResolverArgs): Promise<Product | null> {
      try {
        const product = await productsDAL.getProductByID(id);
        if (!product) {
          throw new Error(`Product with ID ${id} not found`);
        }
        return product;
      } catch (error) {
        throw new Error(`Failed to fetch product with ID: ${id}`);
      }
    },
    async getProductBySearch(_: any, { search }: ResolverArgs): Promise<Product[] | null> {
      try {
        const products = await productsDAL.getProductBySearch(search);
        if (!products || products.length === 0) {
          throw new Error(`No products found for search term: ${search}`);
        }
        return products;
      } catch (error) {
        throw new Error(`Failed to fetch product by search term: ${search}`);
      }
    },
    async getTop5Products(): Promise<Product[]> {
      try {
        const products = await productsDAL.getTop5Products();
        return products;
      } catch (error) {
        throw new Error(`Failed to fetch top 5 products`);
      }
    },
    async getProductsByCategory(_: any, { name }: ResolverArgs): Promise<Product[] | undefined> {
      try {
        const category = await productsDAL.getProductsByCategory(name);
        return category;
      } catch (error) {
        throw new Error(`Failed to fetch category: ${name}`);
      }
    },
  }
};

