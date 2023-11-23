import Product from "../types/Product";
import handleApiRes from "./apiResHandler";
// import dotenv from "dotenv";
// dotenv.config();

async function getTop5Products(): Promise<Product[]> {

    const response = await fetch('/api/products/topFiveProducts');

  

    return await handleApiRes(response);
}
async function reviewProduct(pid: string,title:string, review: string,rating:number,): Promise<Product> {
    const response = await fetch(`/api/products/${pid}/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ review: review 
            ,rating:rating,
            title:title}),
      });
  
      return await handleApiRes(response);
}
async function getProduct(pid: string): Promise<Product> {
    const response = await fetch(`/api/products/${pid}`);
    return await handleApiRes(response);
}



export default { getTop5Products, getProduct,reviewProduct}

