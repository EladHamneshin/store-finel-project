import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import { connectDB } from './configs/db.js';
import { errorHandler, notFound } from './middlewares/errorsMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productsRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import pg from "pg";
const { Pool } = pg;
import { config } from 'dotenv';
config();




const app = express();

// APP CONFIGS
// console.log(process.env);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.use('/api', cartRoutes);
app.use('/api/products', productRoutes);
app.use('/api', categoryRoutes);
app.use(notFound);
app.use(errorHandler);


const port = 5000 ;

//await connectDB();


app.listen(port, async () => {
  const pool = new Pool()
  const res = await pool.connect()
  res.release()
  console.log(`server is running at port ${port}`);
  console.log(`Database connection test completed successfully`);
});
