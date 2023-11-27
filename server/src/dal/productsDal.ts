import axios from "axios";
import {foo} from "../data.js";
import Product from "../types/Product.js";


const getProductByID = async (id:string) => {
    const data = foo
    foo.filter((item:Product) => item.id===String(id))
    return data
    // const res = await axios.get(`https://dummyjson.com/products${id}`)
    // console.log(await res.data)
    // return res.data
}


const getTop5Products =  async () => {
    const data = foo
    return data 
    // const res = await axios.get(`${process.env.BANNER_BASE_URI}/api/ext/bannersProduct/top5/products`)
    // return res.data
};


//Top 5 for category
const getTop5ProductsCategoty =  async () => {
    const data = foo
    return data 
    // const res = await axios.get(`${process.env.BANNER_BASE_URI}/api/ext/bannersProduct/top5/:category`)
    // return res.data
};

export default {getProductByID, getTop5Products,getTop5ProductsCategoty }