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

input CreditCardInput {
  cardNumber: String!
  expirationDate: String!
  CVV: String!
  cardHolderName: String!
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

input OrderInput {
  cartItems: [ProductInput]
  userId: ID
  orderTime: String
  userName: String
  userEmail: String
  status: OrderStatusEnum
  totalPrice: Float
  shippingDetails: ShippingDetailsTypeInput
  creditCardDetails: CreditCardInput
}

type Mutation {
  getOrderFromClient(order: OrderInput!): String
  checkDebitCard(debitCardDetails: CreditCardInput!): String
}

type Query {
  getOrdersFromOms(id: ID!): GetOrderInterface
}

input ShippingDetailsTypeInput {
  address: AddressInput
  contactNumber: String
  orderType: OrderEnum
}

input AddressInput {
  country: String
  city: String
  street: String
  cellPhone: String
  zipCode: String
}

`;

