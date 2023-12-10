export const bannerTypeDefs = `
  type Banner {
    id: ID
    name: String
    imageUrl: String
  }

  type Query {
    getBannersSide: [Banner]
    getBannersTop: [Banner]
    getBannersAll(userID: String!): [Banner]
  }

`;
