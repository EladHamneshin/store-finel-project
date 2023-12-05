const typeDefs = `
  type User {
    id: ID!
    username: String!
    # Add other fields as needed
  }

  type Query {
    getUser(id: ID!): User!
    getAllUsers: [User!]!
    # Add other query types as needed
  }

  type Mutation {
    createUser(username: String!): User!
    # Add other mutation types as needed
  }
`;

export default typeDefs;
