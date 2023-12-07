export const categoriesTypeDefs = `
  type Category {
    id: ID!
    name: String!
    clicked: Int!
  }

  type Query {
    getCategories: [Category]!
    getCategoryByName(name: String!): Category
    getTop5ForCategories: [Category]!
  }
`;

