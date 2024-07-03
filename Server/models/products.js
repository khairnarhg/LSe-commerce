const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category_name: String,
});

const productSchema = new Schema({
  product_id: String,
  product_name: String,
  product_description: String,
  product_dimensions: String,
  product_instructions: String,
  product_cost: Number,
  product_rating: { type: Number, min: 0, max: 5 },
  product_reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], 
  categories: [categorySchema], 
});

module.exports = mongoose.model('Product', productSchema);
