import axios from "axios";
import foo from "../data.js";

interface prod {
    id: string ,
    name: string,
    salePrice: number,
    quantity : number,
    description : string,
    category: string,
    discountPercentage : number,
}


const getProductByID = async (id:string) => {
    const data = foo.filter((item:prod)=>{item.id===id})
    return data
    // const res = await axios.get(`https://dummyjson.com/products${id}`)
    // console.log(await res.data)
    // return res.data
}



const getTop5Products =  async () => {
    const data = foo
    return data

    // const res = await axios.get('https://store-test.free.mockoapp.net/api/topFiveCategories')
    // console.log(res.data,'tov')
    // return res.data
};

export default {getProductByID, getTop5Products }