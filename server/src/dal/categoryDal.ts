import axios from "axios";
import { config } from 'dotenv';
config();

const banner = process.env.BANNER_BASE_URL
const erp = process.env.ERP_BASE_URL


//erp
const getCategories = async () => {
    const categorys = await axios.get(`${erp}/api/shopInventory/categories`);
     return categorys.data.data;
};

//erp
const getCategoryProducts = async (name: string) => {
    const res = await axios.get(`${erp}/api/shopInventory/categories${name}`)
    console.log(await res.data)
    return res.data.data;
};

//BANNERS
const getTop5Categories = async () => {
    const res = await axios.get(`${banner}/api/ext/bannersProduct/top5/products`)
    console.log(await res.data)
    return res.data.data;
};



export default { getCategories, getCategoryProducts, getTop5Categories};