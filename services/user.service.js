const User = require('../models/User');
const bcrypt = require('bcryptjs');
const user = require('../models/user.js')



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


const persist = async (insert) => {
	
	return await user
		.query()
		.insert({
			fname: insert.fname,
			lname: insert.lname,
			email: insert.email,
			password: insert.password,
			phonenumber: insert.phonenumber
		})
}

const findById = async (id) => {

	return user
		.query()
		.findById(id)
}

//TODO: test
/**
*	updates user passed in and returns rows affected
*
*/
const update = async(existing) => {
	return user
			.query()
			.patch(existing)
			.findById(existing.id)
}

//TODO: test
const remove = async(id) => {
	return user
			.query()
			.deleteById(id)
}


module.exports = {
	addUser, getUser, persist, remove, update 
}
