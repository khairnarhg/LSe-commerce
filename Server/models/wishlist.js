const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: 'Product' }, 
  quantity: Number,
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
