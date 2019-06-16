const userService  = require( "../services/user.service.js" )
const User = require('../models/User');
const keys = require('../config/keys');
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const createUser = async (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);
	try {
		if (!isValid) {
    		throw errors
  		}
		const newUser = new User({
	      fname : req.body.fname, 
	      lname: req.body.lname,
	      email: req.body.email,
	      password: req.body.password
	    })

	    if (req.body.phonenumber) {
	    	newUser.phonenumber = req.body.phonenumber
	    }

		await userService.addUser(newUser);
		res.sendStatus(201);
	} catch (e) {
		return res.status(400).json(e);
	}
	

}

const loginUser = async(req,res) => {

	try {
		
		const user = new User({
	        email: req.body.email,
	        password: req.body.password
		})

		await userService.getUser(user)

		const payload = { id: user.id, name: user.name}; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );

	} catch (e) {
		console.log(e)

		let errors = {message: e}

		if(e == 'User not found'){
			return res.status(404).json(errors)
		} else if(e == 'Invlaid Password'){
			return res.status(400).json(errors)
		}

		return res.status(400)

	}


}



module.exports = {
	createUser, loginUser
}