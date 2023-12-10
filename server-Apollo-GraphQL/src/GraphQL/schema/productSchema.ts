export const productTypeDefs = `
interface Coordinate {
  longitude1: Float!
  longitude2: Float!
  longitude3: Float!
  latitude1: Float!
  latitude2: Float!
  latitude3: Float!
}

type Image {
  url: String!
  alt: String!
}

type Tag {
  tag: String!
  tag2: String!
}

type Product {
  id: ID!
  name: String!
  saleprice: Float!
  quantity: Int!
  description: String!
  category: String!
  discount: Float!
  rating: Float!
  click: Int!
  coordinate: Coordinate!
  image: Image!
  tags: Tag!
}

input ProductInput {
  name: String!
  saleprice: Float!
  quantity: Int!
  description: String!
  category: String!
  discount: Float!
  rating: Float!
  click: Int!
  coordinate: CoordinateInput!
  image: ImageInput!
  tags: TagInput!
}

input CoordinateInput {
  longitude1: Float!
  longitude2: Float!
  longitude3: Float!
  latitude1: Float!
  latitude2: Float!
  latitude3: Float!
}

input ImageInput {
  url: String!
  alt: String!
}

input TagInput {
  tag: String!
  tag2: String!
}

type Query {
  getProductByID(pid: String!): Product
  getTop5Products: [Product]!
  getProductBySearch(searchItem: String!): [Product]!
  getProductsByCategory(name: String!): [Product]!
}
`;