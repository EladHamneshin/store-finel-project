import cors from "cors";
import morgan from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorsMiddleware.js";

import pg from "pg";
const { Pool } = pg;
import { config } from "dotenv";

config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorHandler);

const dbConnect = async () => {
  const pool = new Pool();
  const res = await pool.connect();
  res.release();
  console.log(`\n\nDatabase connection test completed successfully!`);
};

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

// Schema TypeDefs
import { userTypeDefs } from "./GraphQL/schema/userSchema.js";
import { productTypeDefs } from "./GraphQL/schema/productSchema.js";
import { categoryTypeDefs } from "./GraphQL/schema/categorySchema.js";
import { cartTypeDefs } from "./GraphQL/schema/cartSchema.js";
import { bannerTypeDefs } from "./GraphQL/schema/bannerSchema.js";
import { orderTypeDefs } from "./GraphQL/schema/orderSchema.js";

// Resolvers
import { userResolvers } from "./GraphQL/resolvers/userResolvers.js";
import { productResolvers } from "./GraphQL/resolvers/productResolvers.js";
import { categoryResolvers } from "./GraphQL/resolvers/categoryResolvers.js";
import { cartResolvers } from "./GraphQL/resolvers/cartResolvers.js";
import { bannerResolvers } from "./GraphQL/resolvers/bannerResolvers.js";
import { orderResolvers } from "./GraphQL/resolvers/orderResolvers.js";

const typeDefs = `
  ${userTypeDefs}
  ${productTypeDefs}
  ${categoryTypeDefs}
  ${cartTypeDefs}
  ${bannerTypeDefs}
  
`;
// ${orderTypeDefs}
const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...productResolvers.Query,
    ...categoryResolvers.Query,
    ...cartResolvers.Query,
    ...bannerResolvers.Query,
    // ...orderResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...cartResolvers.Mutation,
    // ...orderResolvers.Mutation
  },
};

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  app.use('/graphql', cors(), express.json(), expressMiddleware(server));

  await dbConnect();

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`\n\n🚀 Server running on http://localhost:${PORT}/graphql`);
  });
}

startServer()