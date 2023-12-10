import productsDal from "../dal/productsDal.js";
import RequestError from "../types/errors/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";



const getProductByID = async (ID: string) => {
    const product = productsDal.getProductByID(ID)
    if (!product)
        throw new RequestError('product not found', STATUS_CODES.BAD_REQUEST)
    return product
}

const getTop5Products = async () => {
    const Top5Products = await productsDal.getTop5Products();
    if (!Top5Products)
        throw new RequestError('Top5Products not found', STATUS_CODES.NOT_FOUND);
    console.log('service');
    return Top5Products;
}

const getProductBySearch = async (search: string) => {
    const product = await productsDal.getProductBySearch(search)
    if (!product)
        throw new RequestError('product not found', STATUS_CODES.BAD_REQUEST)
    return product
}

const getProductsByCategory = async (category: string) => {
    console.log("hi from service getCategoryProducts:", category);
    const categoryProducts = await productsDal.getProductsByCategory(category);
    if (!categoryProducts)
        throw new RequestError('Category not found', STATUS_CODES.NOT_FOUND);
    return categoryProducts;

}

export default { getProductByID, getTop5Products, getProductBySearch, getProductsByCategory }