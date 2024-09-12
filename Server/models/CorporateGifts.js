const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const CorporateGiftsSchema= new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phno: { type: String, required: true },
    company: { type: String, required: true },
    country: { type: String, required: true },
    quantities: { type: Number, required: true },
    product_name: { type: String, required: true },
    message: String,
                                                                      
},{ collection: 'corporate_gifts' });

module.exports = mongoose.model('corporate_gifts', CorporateGiftsSchema);