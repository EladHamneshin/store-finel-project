import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

type Product = {
    description: string;
    price: string;
}

type Props = {
    product: Product;
}

type OrderData = {
    orderID: string;
    payerID?: string;
    paymentID?: string;
    billingToken?: null;
    facilitatorAccessToken: string;
    autoCode?: string;
    subscriptionID?: string;
}

export default function Paypal(props: Props): JSX.Element {
    const { product } = props;

    const [paidFor, setPaidFor] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleApprove = (orderData: OrderData) => {
        setPaidFor(true);
        console.log("orderId: ", orderData.orderID);
        console.log("orderData: ", orderData);
    };

    if (paidFor) {
        alert("Thank you for purchasing from Eazy2code!");
    };

    if (error) {
        alert(error);
    }

    return (
        <>
            <PayPalButtons
                style={{ layout: "horizontal" }}
                onClick={(data, actions) => {
                    const hasAlreadyBoughtCourse = false;
                    if (hasAlreadyBoughtCourse) {
                        setError("You already bough this course!");
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
                }}
                onError={(err) => {
                    setError(err.toString());
                    console.log(`PayPal Chckout onError: ${err}.`);
                }}
            />
        </>
    );
}