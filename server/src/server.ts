import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middlewares/errorsMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productsRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import pg from "pg";
const { Pool } = pg;
import { config } from "dotenv";
import ordersRouter from "./routes/ordersRouets.js";
import bannerRoutes from "./routes/bannerRouetes.js";
config();


const app = express();

// App configurations
app.use(
    cors({
        origin: "*",
    })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/users", cartRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", ordersRouter);
app.use("/api/banner", bannerRoutes);
app.use("/api/", categoryRoutes);

app.use(errorHandler);



export const connectionString = process.env.CONNECTION_STRING;

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    const pool = new Pool();
    const res = await pool.connect();
    res.release();
    console.log(`Database connection test completed successfully`);
    console.log(`\nServer running at http://localhost:${PORT}`);
});


// ============================================================================

// GraphQL.
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './GraphQL/schemas/schema.js'
import resolvers from './GraphQL/resolvers/resolvers.js';


const server = new ApolloServer({
    typeDefs,
    resolvers,
});


const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);