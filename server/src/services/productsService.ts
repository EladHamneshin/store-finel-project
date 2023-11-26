import { Types } from "mongoose";
import productsDal from "../dal/productsDal.js";
import RequestError from "../types/errors/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";


const getProductByID  = async (ID:string) => {
    const product = productsDal.getProductByID(ID)
    if(!product)
        throw new RequestError('product not found', STATUS_CODES.BAD_REQUEST)

    return product
}





const getTop5Products = async () => {
    const Top5Products = await productsDal.getTop5Products();
    // if (!Top5Products)
    //     throw new RequestError('Top5Products not found', STATUS_CODES.NOT_FOUND);
    //     console.log( 'service');
    return Top5Products;
}

export default {getProductByID, getTop5Products }