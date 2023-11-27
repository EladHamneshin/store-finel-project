import axios from "axios";
import {products} from "../data.js";
import Product from "../types/Product.js";


const getProductByID = async (id:string) => {
    // console.log('hellow from dal', id);
    const data = products.filter((item:Product) => item.id===String(id))
    // console.log('hellow from dal', data);
    //add function to get reviews 
    return data

    // const res = await axios.get(`https://dummyjson.com/products${id}`)
    // console.log(await res.data)
    // return res.data
}



const getTop5Products =  async () => {
    const data = products
    // console.log('hellow from dal', data);
    return data 
    // const res = await axios.get(`${process.env.BANNER_BASE_URI}/api/topFiveCategories`)
    // return res.data
};

export default {getProductByID, getTop5Products }