export const cartTypeDefs = `
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

  input ProductInput {
    id: ID!
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

  input MetaDataInput {
    pid: String
    action: String
  }

  input CartItemInput {
    product: ProductInput
    quantity: Int
  }

  input CartInput {
    id: ID
    userId: String
    items: [CartItemInput]
  }

  type Cart {
    id: ID
    userId: String
    items: [CartItem]
  }

  type CartItem {
    product: Product
    quantity: Int
  }

  type Query {
    getCart(userId: String!): Cart
  }

  type Mutation {
    updateCart(
      userId: String!
      product: ProductInput!
      quantityOfProduct: Int!
    ): Cart

    deleteCart(userId: String!): Cart

    patchAmount(userId: String!, metaDate: MetaDataInput!): Cart

    deleteCartItem(userId: String!, pid: String!): Cart

    sendCart(cart: CartInput!): Cart
  }
`;

