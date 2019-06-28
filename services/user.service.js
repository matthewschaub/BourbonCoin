const User = require('../models/User');
const bcrypt = require('bcryptjs');


const addUser = async (newUser) => {

	User.findOne({ email: newUser.email }).then(user => {
	    if (user) {
	      throw new Error('Email already exists');
	    } else {
	    	console.log(newUser);
	      bcrypt.genSalt(10, (err, salt) => {
	        bcrypt.hash(newUser.password, salt, (err, hash) => {
	          if (err) throw err;
	          newUser.password = hash;
	          newUser
	            .save()
	            .then(user => console.log(user))
	            .catch(err => console.log(err));
	        });
	      });
	  }
	}); 
}

const getUser = async (existingUser) => {

	return User.findOne({ email: existingUser.email })
}



	
module.exports = {
	addUser, getUser
}
