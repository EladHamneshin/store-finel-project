import CategoryModel from "../models/categoryModel.js";
import productModel from "../models/productModel.js";
import { config } from 'dotenv';
config();

const banner = process.env.BANNER_BASE_URL

const erp = process.env.ERP_BASE_URL

const getCategories = async () => {
    const categories = await CategoryModel.find({});
    return categories;
};

const getCategoryProducts = async (name: string) => {
    const a = await productModel.find();
    const category = await CategoryModel.findOne({ name }).populate('products').exec();
    return category;
};

const getTop5Categories = async () => {
    const response = await fetch(`${erp}/api/shopInventory`);
    console.log("response", response);
    return ([response]);
};

const increaseClickCount = async (name: string) => {
    return await CategoryModel.findOneAndUpdate(
        { name: name },
        { $inc: { clickCount: 1 } },);
};
export default { getCategories, getCategoryProducts, getTop5Categories, increaseClickCount};