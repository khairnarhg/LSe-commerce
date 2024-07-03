const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: 'Product' }, 
});

const orderSchema = new Schema({
  order_id: String,
  tracking_id: String,
  amount: Number,
  deliveryAddress: {
    street: String,
    city: String,
    state: String,
    pincode: Number,
  },
  product_Ids: [productSchema], 
});

module.exports = mongoose.model('Order', orderSchema);
