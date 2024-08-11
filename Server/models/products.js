const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_id: String,
  product_name: String,
  product_description: String,
  product_dimensions: String,
  product_instructions: String,
  product_cost: Number,
});

const categorySchema = new Schema({
  category_name: String,
  products: [productSchema],
});

const mainSchema = new Schema({
  categories: [categorySchema],
});

module.exports = mongoose.model('Main', mainSchema);

