import Cart from "../types/Cart";
import handleApiRes from "./apiResHandler";
// import dotenv from "dotenv";
// dotenv.config();
//no need for change

async function getCart(): Promise<Cart[]> {
    const response = await fetch(`/api/users/cart`, { method: "GET" });
    const data = await handleApiRes(response);
    // console.log("hi from getCart:", data);
    return data
}

async function addToCart(pid: string, quantity: string, name: string, description: string, salePrice: number, discount: number, url: string,  userid?: string): Promise<Cart> {
    // console.log("hi from cartsAPi addtocart:", "pid:", pid, "quantity:", quantity, "userid:", userid)
    const response = await fetch(`/api/users/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            product_id: pid,
            quantity: quantity,
            name: name,
            description: description,
            salePrice: salePrice,
            discount: discount,
            image: {
                url: url
            },
            userid: userid
        }),
    });
    return await handleApiRes(response);
}

async function updateQuantity(pid: string, action: "inc" | "dec"): Promise<Cart> {
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

async function deleteProductFromCart(pid: string): Promise<Cart> {
    console.log("hi from cartsAPI, deleteProductFromCart:", pid);
    const response = await fetch(`/api/users/${pid}`, { method: "DELETE" });
    const data = await handleApiRes(response);
    return data
}

//external
async function sendCartToOms(cart: object): Promise<Cart> {
    const response = await fetch(`/api/checkout`, {
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

async function deleteCart(): Promise<Cart> {
    const response = await fetch(`/api/users/cart`, { method: "DELETE" });
    return await handleApiRes(response);
}

export default { getCart, addToCart, updateQuantity, deleteProductFromCart, deleteCart, sendCartToOms }