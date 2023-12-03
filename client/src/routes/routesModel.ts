const ROUTES = {
    HOME: '/store',
    LOGIN: './login',
    REGISTER: './register',
    CATEGORY: './category/:cname',
    PRODUCT: './product/:pid',
    CART: './cart',
    COMPARE: './compare/:pid1/:pid2',
    DEFAULT: '*',
    ACCOUNT:'./account',
    ADDRESS:'./address',
    SERVICE:'./service',
    ORDERS:'./orders',
    SHIPMENT:'./shipment',
    CHECKOUT: "./checkout/:totalAmount",
    CONNECT: "./connect",
};

export default ROUTES;