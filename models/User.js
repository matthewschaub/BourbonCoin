const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


var AddressId = mongoose.Schema.Types.ObjectId;

//Create Schema
const UserSchema = new Schema({
  fname : {
      type: String,
      required: true
  },

  lname : {
      type: String,
      required: true
  },
  
  email: { 
      type: String, 
      required: true
  },

  password: { 
      type: String, 
      required: true
  },

  publickey: String,

  phonenumber : String,
  
  addressId :AddressId,

  /*avatar: { type: String, 
  },*/
  date: { type: Date, 
      default: Date.now
  },
});

module.exports = User = mongoose.model('users', UserSchema);