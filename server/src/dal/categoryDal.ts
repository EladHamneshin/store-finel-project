import axios from "axios";
import CategoryModel from "../models/categoryModel.js";
// import productModel from "../models/productModel.js";
import { config } from 'dotenv';
config();

const banner = process.env.BANNER_BASE_URL

const erp = process.env.ERP_BASE_URL

const getCategories = async () => {
    const categorys = await axios.get(`${erp}/api/shopInventory/categories`);
    return categorys.data
};
//ERP
const getCategoryProducts = async (name: string) => {
    const res = await axios.get(`${erp}/api/shopInventory/?category=${name}`)
    return res.data
};
//BANNERS
const getTop5Categories = async () => {
    const res = await axios.get(`${banner}/api/ext/bannersProduct/top5/categories`)
    return res.data.data
};


export default { getCategories, getCategoryProducts, getTop5Categories };