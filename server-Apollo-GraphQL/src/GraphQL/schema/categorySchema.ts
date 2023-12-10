export const categoryTypeDefs = `
  type Category {
    id: ID!
    name: String!
    clicked: Int!
  }

  type Query {
    getCategories: [Category]!
    getTop5ForCategories: [Category]!
  }
`;

