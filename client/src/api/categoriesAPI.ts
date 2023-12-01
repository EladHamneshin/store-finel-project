import Category from "../types/Category";
import {Product} from "../types/Product";
import handleApiRes from "./apiResHandler";



async function getCategories(): Promise<Category[]> {
    const response = await fetch(`/api/categories`);
    return await handleApiRes(response);
}

async function getTop5categories():Promise<Category[]> {
    const response = await fetch(`/api/topFiveCategories`);
    return await handleApiRes(response);
}

async function getProductsFromCategory(name: string): Promise<Product[]>{
        const response = await fetch(`/api/${name}`);        
        return await handleApiRes(response);
}



export default { getCategories, getTop5categories, getProductsFromCategory,  }