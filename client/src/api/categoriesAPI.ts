import Category from "../types/Category";
import Product from "../types/Product";
import handleApiRes from "./apiResHandler";

//external
async function getCategories(): Promise<Category[]> {
    const response = await fetch('/api/categories');
    return await handleApiRes(response);
}
//external
async function getTop5categories():Promise<Category[]> {
    const response = await fetch('/api/topFiveCategories');
    return await handleApiRes(response);
}

async function getProductsFromCategory(name: string): Promise<Product[]>{
        const response = await fetch(`/api/category/${name}`);
        return await handleApiRes(response);
}

async function patchCategoryClick(cname: string): Promise<Category> {
    const response = await fetch(`/api/category/${cname}/click`, { method: "PATCH" });
    return await handleApiRes(response);
}

export default { getCategories, getTop5categories, getProductsFromCategory, patchCategoryClick }