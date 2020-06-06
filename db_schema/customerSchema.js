const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
      name : {
        type: String,
        required: true,
        trim: true,
      },
      email  : {
        type: String,
        required: true,
      },
      Address : {
          type:String,
          required: true
      },
      Approved :{
          type:Boolean
      }
},{collection: 'customers'});
mongoose.model('Customer',customerSchema);

