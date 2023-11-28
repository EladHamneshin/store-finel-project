import axios from "axios";
<<<<<<< HEAD
import {categories} from "../data.js";

=======
import  {categories,products}  from '../data.js'
import { c } from "vitest/dist/reporters-5f784f42.js";
>>>>>>> test
//OMS
const getCategories = async () => {
const data = categories
return data
};

//OMS
const getCategoryProducts = async (name: string) => {
<<<<<<< HEAD
    // const res = await axios.get(`https:/product${name}`)
    // console.log(await res.data)
    // return res.data
    const data = categories
=======
    const data = products
>>>>>>> test
    return data
};

//BANNERS
const getTop5Categories = async () => {
 const data = categories
    return data
};

export default { getCategories, getCategoryProducts, getTop5Categories};