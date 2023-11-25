import { Product } from "./Product";
import { CreditCardDetails } from "./creditCard";

export interface OrderInterface {
    cartItems: Product[];
    orderTime: Date;
    userId: string;
    email: string;
    userName: string;
    status: OrderStatusEnum;
    totalPrice: number;
    shippingDetails: {
        address: {
            country: string;
            city: string;
            street: string;
            celPhone: string;
            zipCode: string;
        };
        contactNumber: string;
        orderType: OrderEnum;
    };
    creditCardDetails: CreditCardDetails;
}

export enum OrderEnum {
    Express = 'Express',
    Regular = 'Regular',
    SelfCollection = 'SelfCollection',
}

export enum OrderStatusEnum {
    Waiting = 'Waiting',
    Sent = 'Sent',
    Received = 'Received',
    Canceled = 'Canceled',
}



export interface Review {
    productId: string;
    userId: string;
    title: string;
    review: string;
    rating: number;
    like: number;
    disLike: number;
}

