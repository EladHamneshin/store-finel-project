export const usersTypeDefs = `
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

  type LogoutResponse {
    message: String!
  }

  type Query {
    getUser(userid: ID!): User
  }
  
  type Mutation {
    registerUser(newUser: UserInput!): User!
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
