export const cartTypeDefs = `
interface CartItem {
    userid: String!
    productid: String!
    storequantity: String!
    quantityOfProduct: String!
    price: String!
    description: String
    discount: String!
    image: Image!
}
interface Cart{
    items:[CartItem]
}


    type Image {
        url: String!
        alt: String!
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
      
input CartItemUpdateInput {
    product:ProductInput
    userid: String!
    quantityOfProduct: Int!
}

type Query {
    getCart(id:ID!):Cart
    deleteProductFromCart(pid:ID!,userId:ID!):VoidResponse
    }
    
    type VoidResponse {
        success: Boolean
        message: String
    }

type Mutation {
    updateCart(cartUpdate:CartItemUpdateInput):VoidResponse
}
`;
