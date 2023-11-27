interface CartItem {
    productid: string;
    name: string;
    description: string;
    salePrice: number;
    quantity: number;
    discount: number;
    image: {
        url: string
    };
}


export default CartItem;
