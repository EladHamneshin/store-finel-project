import { Types } from "mongoose";
import ProductModel from "../models/productModel.js";
import { config } from 'dotenv';
import axios from "axios";

config();
const banner = process.env.BANNER_BASE_URL
const erp = process.env.ERP_BASE_URL

const getProductByID = async (id: Types.ObjectId) => {
    return await ProductModel.findOne({ _id: id })
}

const increaseClickCount = async (id: Types.ObjectId) => {
    return await ProductModel.findOneAndUpdate(
        { _id: id },
        { $inc: { clickCount: 1 } },
        { new: true }
    );
};

const getProductQuantity = async (id: Types.ObjectId) => {
    return await ProductModel.findOne({ _id: id }).select('quantity')
}

const deleteQuantity = async (id: Types.ObjectId, quantityToDelete: number) => {
    return await ProductModel.findByIdAndUpdate({ _id: id }, { $inc: { quantity: (quantityToDelete * -1) } })
};
const getTop5Products = async () => {
    const response = await axios.get(`${banner}/api/ext/bannersProduct/top5/products`);
    return (response.data.data);
};

export default { getProductByID, increaseClickCount, getProductQuantity, deleteQuantity, getTop5Products }