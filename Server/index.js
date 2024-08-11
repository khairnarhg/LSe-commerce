const express = require('express');
const http = require('http'); 
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);

const url = 'mongodb+srv://hgkhairnar255:kMJBEsl0AkfZ0GMc@cluster0.541wpl6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url, {}).then(() => {
    console.log('db connected')
});

const Main = require('./models/products');

app.use(express.json());

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});


const PORT = 5000;
server.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});