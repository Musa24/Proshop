import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

//Route
app.get('/', (req, res) => {
  res.send('APP is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}  in ${mode} mode `);
});
