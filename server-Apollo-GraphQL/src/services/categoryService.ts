import categoryDal from "../dal/categoriesDal.js";
import productsDal from "../dal/productsDal.js";
import RequestError from "../types/errors/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";
import { Request } from "express";

const getCategories = async () => {
    const categorys = await categoryDal.getCategories();
    if (!categorys)
        throw new RequestError('Categorys not found', STATUS_CODES.NOT_FOUND);
    return categorys;
}

const getTop5Categories = async () => {
    const category = await categoryDal.getTop5Categories();
    if (!category)
        throw new RequestError('Category not found', STATUS_CODES.NOT_FOUND);
    return category;
}


export default { getCategories, getTop5Categories }