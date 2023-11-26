import axios from "axios";
import foo from "../data.js";
import pg from "pg";
const { Pool } = pg;

interface prod {
    id: string ,
    name: string,
    salePrice: number,
    quantity : number,
    description : string,
    category: string,
    discountPercentage : number,
}


const getProductAndReviewByID = async (id:string) => {
    const data = foo.filter((item:prod) => item.id===String(id))

    const query = 'SELECT * FROM users WHERE user_id ::text = $1';
    const values = [id];
    const res = await sendQueryToDatabase(query, values)
    return [data, res]

    // const res = await axios.get(`https://dummyjson.com/products${id}`)
    // console.log(await res.data)
    // return res.data
}



const getTop5Products =  async () => {
    const data = foo
    return data 
    // const res = await axios.get(`${process.env.BANNER_BASE_URI}/api/topFiveCategories`)
    // return res.data
};

const sendQueryToDatabase = async (query: string, values: any[]): Promise<any> => {
    const pool = new Pool()
    const res = await pool.connect()
    // console.log("hi from productsDal, sendQueryToDatabase:", values);
    const data = await res.query(query, values).catch(err => console.log(err));
    // console.log("hi from productsDal, sendQueryToDatabase:", data);
    res.release()
    return data
}

export default {getProductAndReviewByID, getTop5Products }