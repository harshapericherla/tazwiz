const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
      name : {
        type: String,
        required: true,
        trim: true,
      },
      price  : {
        type: Number,
        required: true,
      },
      desc : {
          type:String,
          required: true
      },
      created_at :{
          type:Date
      }
},{collection: 'product'});
mongoose.model('Product',productSchema);

