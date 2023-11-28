import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
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
app.use('/api/users', cartRoutes);
app.use('/api/products', productRoutes);
app.use('/api', categoryRoutes);
app.use(notFound);
app.use(errorHandler);


// Payment.
// =====================================================================

app.post('/api/payment/check', (req, res) => {
  const debitCardDetails = req.body; // פרטי כרטיס האשראי מתקבלים כאן

  // ניתוב לשירות או ל-API המתאים לבדיקת פרטי כרטיס האשראי
  // כאן תוכל להשתמש בפונקציות ובשירותים המתאימים לבדיקת תקינות פרטי כרטיסי האשראי

  // לדוגמה, אם קיים פונקציה שבודקת תקינות כרטיס אשראי ומחזירה תשובה ב-JSON
  // כאן אני משתמש ב setTimeout כדי ליצור השהייה של 3 שניות לפני החזרת התשובה
  setTimeout(() => {
    // כאן אתה יכול להמשיך עם בדיקת תקינות ולהחזיר תשובה בהתאם
    // const isValid = validateCreditCardDetails(debitCardDetails);
    console.log(debitCardDetails);
    if (true) {
      res.status(200).json({ message: 'Credit card details are valid' });
    } else {
      res.status(400).json({ message: 'Invalid credit card details' });
    }
  }, 3000); // השהייה של 3 שניות
});



app.post('/api/payment/order', (req, res) => {
  const order = req.body; 
  setTimeout(() => {
  
    console.log(order);
    if (true) {
      res.status(200).json({ message: 'The order has been placed !' });
    } else {
      res.status(400).json({ message: 'An error occurred in the ordering process !!!' });
    }
  }, 3000); // השהייה של 3 שניות
});

// ======================================================================



const port = 5000 ;

//await connectDB();
export const connectionString = process.env.CONNECTION_STRING;


app.listen(port, async () => {
  const pool = new Pool({connectionString: connectionString})
  const res = await pool.connect()  
  res.release()
  console.log(`server is running at port ${port}`);
  console.log(`Database connection test completed successfully`);
});
