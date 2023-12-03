import Cart from "../types/Cart";
import { Product } from "../types/Product";
import ProductCart from "../types/ProductCart";
import handleApiRes from "./apiResHandler";
// import dotenv from "dotenv";
// dotenv.config();
//no need for change
async function getCart(userId: string): Promise<ProductCart[]> {
    const response = await fetch(`${import.meta.env.VITE_API_URI}/users/cart/get`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: userId,
        }),
    }) ;
    // console.log("hi from get cart");
    return await handleApiRes(response);
}
async function addToCart( userId:string,product:Product,quantityOfProduct:string): Promise<Cart> {
    console.log("hi from cartsAPi addtocart:", product,userId,quantityOfProduct)
    const response = await fetch(`${import.meta.env.VITE_API_URI}/users/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId:userId,
           product: product,
           quantityOfProduct:quantityOfProduct
        }),
    });
    return await handleApiRes(response);
}
async function updateQuantity(pid: string, action : "inc" | "dec"):Promise<Cart> {
    console.log('cartapi update quantity',pid,action)
    const response = await fetch(`${import.meta.env.VITE_API_URI}/users/cart`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pid: pid,
            action: action
        }),
    });
    return await handleApiRes(response);
}
async function deleteProductFromCart(pid: string):Promise<Cart> {
    console.log("hi from cartsAPI, deleteProductFromCart:", pid);
    const response = await fetch(`${import.meta.env.VITE_API_URI}/users/${pid}/cart`, {method: "DELETE"});
    const data = await handleApiRes(response);
    return data
}
//external
async function sendCartToOms(cart:object):Promise<Cart> {
    const response =  await fetch(`${import.meta.env.VITE_API_URI}/checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            cart: cart,
        }),
    });
    return await handleApiRes(response);
}
async function deleteCart():Promise<Cart> {
    const response = await fetch(`${import.meta.env.VITE_API_URI}/users/cart`, {method: "DELETE"});
    return await handleApiRes(response);
}
export default { getCart, addToCart, updateQuantity, deleteProductFromCart, deleteCart,sendCartToOms }