import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

const app = express();

dotenv.config();

//Routes

//Conect to database
connectDB();

//Route
app.get('/', (req, res) => {
  res.send('APP is running');
});

// routes middleware
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}  in ${mode} mode `);
});
