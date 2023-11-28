// import mongoose from "mongoose";
import pg from "pg";
const { Pool } = pg;
import { config } from 'dotenv';
config();


const port = 5000;
export const connectionString = process.env.CONNECTION_STRING 


const connectDB = async () => { 

  if (!process.env.CONNECTION_STRING) {
    console.error("db connection string must be defined");
    process.exit(1);
  }

  try {

    const pool = new Pool({connectionString: connectionString})
    const res = await pool.connect()
    res.release()
    console.log(`Database connection test completed successfully`);

  } catch (error) {

    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }
};

export { connectDB };
