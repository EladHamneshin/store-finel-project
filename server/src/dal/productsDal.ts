import axios from "axios";
import {Product} from "../types/Product.js";
import { config } from "dotenv";
config()

const banner = process.env.BANNER_BASE_URL


const erp = process.env.ERP_BASE_URL

const getProductByID = async (id:string) => {

    console.log('hellow from dal', id);
    const res = await axios.get(`${erp}/api/shopInventory/${id}`)
    return res.data
}


const getTop5Products =  async () => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://banners-deshbord-doker.onrender.com/api/ext/bannersProduct/top5/products',
        // headers: { 
        //   'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjUiLCJpYXQiOjE2OTUyOTM4MDQsImV4cCI6MTY5NTI5NzQwNH0.Nc0JXklfqi3LVxaoaPDY8Y-C6JEpR4wOG-9F6pqV8no ', 
        //   'Content-Type': 'application/json'
        // },
        
      };
      
    const res = await axios.request(config)
    console.log("hello from getTop5Products:", res.data);
    
    return res.data.data
};


//Top 5 for category
const getTop5ProductsCategoty =  async (name: string) => {
    const res = await axios.get(`${banner}/api/ext/bannersProduct/top5/${name}`)
    return res.data.data
};

export default {getProductByID, getTop5Products,getTop5ProductsCategoty }