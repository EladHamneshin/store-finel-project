import Cart from "../types/Cart";
import handleApiRes from "./apiResHandler";
// import dotenv from "dotenv";
// dotenv.config();
//no need for change
async function getCart(userid: string): Promise<Cart[]> {
    const response = await fetch(`/api/users/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: userid,
        }),
    }) ;
    // console.log("hi from get cart");
    return await handleApiRes(response);
}
async function addToCart( pid: string, quantity: string,userid?:string): Promise<Cart> {
    console.log("hi from cartsAPi addtocart:", userid, pid, quantity)
    const response = await fetch(`/api/users/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userid: userid,
            product_id: pid,
            quantity: quantity
        }),
    });
    return await handleApiRes(response);
}
async function updateQuantity(pid: string, action : "inc" | "dec"):Promise<Cart> {
    const response = await fetch(`/api/users/cart`, {
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
    const response = await fetch(`/api/users/cart/${pid}`, {method: "DELETE"});
    const data = await handleApiRes(response);
    return data
}
//external
async function sendCartToOms(cart:object):Promise<Cart> {
    const response =  await fetch(`/api/checkout`, {
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
    const response = await fetch(`/api/users/cart`, {method: "DELETE"});
    return await handleApiRes(response);
}
export default { getCart, addToCart, updateQuantity, deleteProductFromCart, deleteCart,sendCartToOms }