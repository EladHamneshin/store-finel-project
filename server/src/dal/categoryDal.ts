import axios from "axios";
import { config } from 'dotenv';
config();

const banner = process.env.BANNER_BASE_URL

const erp = process.env.ERP_BASE_URL

const getCategories = async () => {
    // const categorys = await axios.get(`https://banners-deshbord-doker.onrender.com/api/ext/bannersProduct/top5/products`);
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3007/api/ext/bannersProduct/top5/products',
      };
      
    const res = await axios.request(config) 
    return res.data
};
//ERP
const getCategoryProducts = async (name: string) => {
    const res = await axios.get(`${erp}/api/shopInventory/?category=${name}`)
    return res.data
};
//BANNERS
const getTop5Categories = async () => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3007/api/ext/bannersProduct/top5/products',
      };
      
    const res = await axios.request(config) 
    return res.data
    // const res = await axios.get(`https://banners-deshbord-doker.onrender.com/api/ext/bannersProduct/top5/categories`)
    return res.data.data
};


export default { getCategories, getCategoryProducts, getTop5Categories };