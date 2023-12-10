export type OrderInPayPal = {
    orderID: string;
    payerID?: string;
    paymentID?: string;
    billingToken?: null;
    facilitatorAccessToken: string;
    autoCode?: string;
    subscriptionID?: string;
}
