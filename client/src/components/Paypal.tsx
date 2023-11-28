import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { OrderData } from "../types/orderDataPayPal";

type Product = {
    description: string;
    price: string;
}

type Props = {
    product: Product;
    onPayPalSuccess: Function;
    onPayPalCancel: Function;
    onPayPalError: Function;
}


export default function Paypal(props: Props): JSX.Element {
    const { product } = props;

    const [paidFor, setPaidFor] = useState<boolean>(false);

    const handleApprove = (orderData: OrderData) => {
        setPaidFor(true);
        console.log("orderId: ", orderData.orderID);
        console.log("orderData: ", orderData);
        props.onPayPalSuccess(orderData)
    };



    return (
        <>
            <PayPalButtons
                style={{ layout: "horizontal" }}
                onClick={(data, actions) => {
                    const hasAlreadyBoughtCourse = false;
                    if (hasAlreadyBoughtCourse) {
                        return actions.reject();
                    } else {
                        return actions.resolve();
                    }
                }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: product.description,
                                amount: {
                                    value: product.price,
                                }
                            }
                        ]
                    })
                }}
                onApprove={async (data, action) => {
                    const order = await action.order?.capture();
                    console.log(`order: ${order}`);
                    handleApprove(data as OrderData);
                }}
                onCancel={() => {
                    console.log('Payment cancelled!');
                    props.onPayPalCancel()
                }}
                onError={(err) => {
                    console.log(`PayPal Chckout onError: ${err}.`);
                    props.onPayPalError()
                }}
            />
        </>
    );
}