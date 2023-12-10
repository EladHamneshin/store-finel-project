export const orderTypeDefs = `
  enum OrderStatusEnum {
    Waiting
    Sent
    Received
    Canceled
  }

  enum OrderEnum {
    Express
    Regular
    SelfCollection
  }

  type Address {
    country: String
    city: String
    street: String
    cellPhone: String
    zipCode: String
  }

  type CreditCardDetails {
    cardNumber: String
    expirationDate: String
    CVV: String
    cardHolderName: String
  }

  type ShippingDetailsType {
    address: Address
    contactNumber: String
    orderType: OrderEnum
  }

  type Product {
    # Define your Product type here
  }

  type OrderInterface {
    cartItems: [Product]
    userId: ID
    orderTime: String
    userName: String
    userEmail: String
    status: OrderStatusEnum
    totalPrice: Float
    shippingDetails: ShippingDetailsType
    creditCardDetails: CreditCardDetails
  }

  type GetOrderInterface {
    orders: [OrderInterface]
  }

  type Mutation {
    getOrderFromClient(order: String, debitCardDetails: CreditCardDetails): String
    checkDebitCard(debitCardDetails: CreditCardDetails): String
  }

  type Query {
    getOrdersFromServer(id: ID): GetOrderInterface
  }
`;
