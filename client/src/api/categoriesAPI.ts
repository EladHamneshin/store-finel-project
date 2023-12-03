import Category from "../types/Category";
import {Product} from "../types/Product";
import handleApiRes from "./apiResHandler";



async function getCategories(): Promise<Category[]> {
    const response = await fetch(`${import.meta.env.VITE_API_URI}/categories`);
    return await handleApiRes(response);
}

async function getTop5categories():Promise<Category[]> {
    const response = await fetch(`${import.meta.env.VITE_API_URI}/topFiveCategories`);
    return await handleApiRes(response);
}

async function getProductsFromCategory(name: string): Promise<Product[]>{
        const response = await fetch(`${import.meta.env.VITE_API_URI}/${name}`);        
        return await handleApiRes(response);
}



export default { getCategories, getTop5categories, getProductsFromCategory,  }