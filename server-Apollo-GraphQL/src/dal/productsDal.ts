import axios from "axios";
import { products } from "../data.js";
import pg from "pg";
const { Pool } = pg;
const erp = process.env.ERP_BASE_URL;
const banner = process.env.BANNER_BASE_URL;



const getProductByID = async (id: string) => {
    // console.log('hellow from dal get poroduct', id);
    const res = await fetch(`${erp}/shopInventory/${id}`)
    const resConverted = await res.json()
    // console.log('hellow from dal fetch product bybyid', resConverted);
    if (res.ok) {

        return resConverted
    }
    const data = products
    console.log('hellow from dal data product by id', data[0]);
    //add function to get reviews 
    return data[0]
}

const getProductBySearch = async (search: string) => {
    const res = await fetch(`${erp}/shopInventory/?search=${search}`)
    console.log('from search firs', res)
    const resProducts = await res.json()
    console.log('hellow from dal search', resProducts);

    if (res.ok && resProducts.length > 0) {
        return resProducts
    }
    const data = products
    // console.log('hellow from dal search data', data); 
    return data
}

const getTop5Products = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${banner}/ext/bannersProduct/top5/products`,
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const res = await axios.request(config)
    return res.data.data
};

// OMS 
const getProductsByCategory = async (name: string) => {
    const data = products
    const res = await fetch(`${erp}/shopInventory?category=${name}`)
    const resConverted = await res.json()
    if (res.ok) {
        return resConverted
    }
    return data
};


export default { getProductByID, getTop5Products, getProductBySearch, getProductsByCategory }