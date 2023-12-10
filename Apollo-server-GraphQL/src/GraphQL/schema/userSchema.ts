export const userTypeDefs = `
  type User {
    userid: ID
    name: String
    email: String!
    password: String!
    contactNumber: Int
    payment: String
    address: Address
  }
  
  type Address {
    country: String
    city: String
    street: String
    zip_code: String
  }

  type LoginResponse {
    store_token: String!
    id: ID!
    email: String!
  }

  type LogoutResponse {
    message: String!
  }

  type Query {
    getUser(userid: ID!): User
  }
  
  type Mutation {
    registerUser(newUser: UserInput!): User!
    loginUser(user: UserInput!): LoginResponse!
    logoutUser: LogoutResponse!
  }
  
  input UserInput {
    userid: ID
    name: String
    email: String!
    password: String!
    contactNumber: Int
    payment: String
    address: AddressInput
  }

  input AddressInput {
    country: String
    city: String
    street: String
    zip_code: String
  }
`;
