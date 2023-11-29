import axios from "axios";
import { Product } from "../types/Product.js";
import { config } from "dotenv";
config()

const banner = process.env.BANNER_BASE_URL
const erp = process.env.ERP_BASE_URL


const getProductByID = async (id: string) => {
    console.log("res:");
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        // url: '${erp}/api/shopInventory/${id}',
        url: `http://localhost:3007/api/shopInventory/${id}`,
    };
    const res = await axios.request(config)
    return res.data
}


const getTop5Products = async () => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3007/api/ext/bannersProduct/top5/products',
    };

    const res = await axios.request(config)
    return res.data
};


//Top 5 for category
const getTop5ProductsCategoty = async (name: string) => {
    const res = await axios.get(`${banner}/api/ext/bannersProduct/top5/${name}`)
    // const res = await axios.get(`http://localhost:3007/api/ext/bannersProduct/top5/products`)
    return res.data
};


const increaseClickCount = async (id: string) => {
    return []
};

export default { getProductByID, getTop5Products, getTop5ProductsCategoty, increaseClickCount }