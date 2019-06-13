const User = require('../models/User');
const bcrypt = require('bcryptjs');


const addUser = async  (newUser) => {

	User.findOne({ email: newUser.email }).then(user => {
	    if (user) {
	      throw'Email already exists';
	    } else {
	    	console.log(newUser);
	      bcrypt.genSalt(10, (err, salt) => {
	        bcrypt.hash(newUser.password, salt, (err, hash) => {
	          if (err) throw err;
	          newUser.password = hash;
	          newUser
	            .save()
	            .then(user => console.log(user));
	        });
	      });


	      return true;
	  }
	}); 
}

const getUser = async (existingUser) => {

	User.findOne({ existingUser.email }).then(user => {
    
	    // Check for user
	    if (!user) {
	      throw 'User not found'
	    }

	    // Check Password
	    bcrypt.compare(existingUser.password, user.password).then(isMatch => {
	      if (isMatch) {
	        // User Matched
	        return user 

	      } else {
	        throw 'Invlaid Password';
	      }
	    });
	});
}


	
module.exports = {
	addUser, getUser
}
