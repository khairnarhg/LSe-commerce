const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({

  product_id: { type: Schema.Types.ObjectId, ref: 'Product' }, 
  quantity: Number,
  cost: Number,
});

const cartSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' }, 
  items: [itemSchema], 
  checkoutAmount: Number,
  deliveryAddress: {
    street: String,
    city: String,
    state: String,
    pincode: Number,
  },
});

module.exports = mongoose.model('Cart', cartSchema);
