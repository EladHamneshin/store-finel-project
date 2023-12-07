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

// APP CONFIGS
// console.log(process.env);
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


const dbConnect = () => {
  const pool = new Pool();
  const res = await pool.connect();
  res.release();
  console.log(`\n\nDatabase connection test completed successfully`);
}


// ==========================================================================
// ==========================================================================

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// TypeDefs.
import { userTypeDefs } from "./GraphQL/schema/userSchema.js";
import { productTypeDefs } from "./GraphQL/schema/productSchema.js";
import { categoryTypeDefs } from "./GraphQL/schema/categorySchema.js";
import { cartTypeDefs } from "./GraphQL/schema/cartSchema.js";
import { bannerTypeDefs } from "./GraphQL/schema/bannerSchema.js";

// Resolvers.
import { userResolvers } from "./GraphQL/resolvers/userResolvers.js";
import { productResolvers } from "./GraphQL/resolvers/productResolvers.js";
import { categoryResolvers } from "./GraphQL/resolvers/categoyResolvers.js";
import { cartResolvers } from "./GraphQL/resolvers/cartResolvers.js";
import { bannerResolvers } from "./GraphQL/resolvers/bannerResolvers.js";



// Combining type definitions from user and product schemas
const typeDefs = `
  ${userTypeDefs} 
  ${productTypeDefs}
  ${categoryTypeDefs}
  ${cartTypeDefs}
  ${bannerTypeDefs}
`;

// Combining resolver objects for users and products
const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...productResolvers.Query,
    ...categoryResolvers.Query,
    ...cartResolvers.Query,
    ...bannerResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...cartResolvers.Mutation
  }
};


// Creating a new ApolloServer instance with type definitions and resolvers
const server = new ApolloServer({ typeDefs, resolvers });


// Function to start the server on a specified port
const startServer = async (server: ApolloServer<any>, port: number) => {
  const { url } = await startStandaloneServer(server, {
    listen: { port },
  });

  // Logging the server's URL once it's ready
  console.log(`🚀  Server ready at: ${url}`);
};

// Port.
const PORT = 3000;

// Start server.
startServer(server, PORT)
