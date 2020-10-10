import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

const app = express();

dotenv.config();

//error middleware
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

//Conect to database
connectDB();

//Route
app.get('/', (req, res) => {
  res.send('APP is running');
});

// routes middleware
app.use('/api/products', productRoutes);

//ERROR middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}  in ${mode} mode `);
});
