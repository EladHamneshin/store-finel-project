import axios from "axios";

//OMS
const getCategories = async () => {
   const res = await axios.get('https://655c7c6a25b76d9884fd5cd1.mockapi.io/product')
   return res.data
};

//OMS
const getCategoryProducts = async (name: string) => {
    const res = await axios.get('https://655c7c6a25b76d9884fd5cd1.mockapi.io/product')
    console.log(await res.data)
    return res.data
};

//BANNERS
const getTop5Categories = async () => {
    const res = await axios.get('https://655c7c6a25b76d9884fd5cd1.mockapi.io/product')
    return res.data
};

export default { getCategories, getCategoryProducts, getTop5Categories};