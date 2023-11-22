import { CreditCardDetails } from "../types/creditCard";
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

export {
    checkDebitCard
}