import { CreditCardDetails } from "../types/creditCard";
import { OrderInterface } from "../types/order";
import handleApiRes from "./apiResHandler";



async function checkDebitCard(debitCard: CreditCardDetails): Promise<CreditCardDetails> {

    const response = await fetch('/api/payment/check', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(debitCard),
    });

    return await handleApiRes(response);
}

async function sendOrder(order: OrderInterface): Promise<OrderInterface> {

    const response = await fetch('/api/payment/order', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    });

    return await handleApiRes(response);
}

export {
    checkDebitCard,
    sendOrder
}