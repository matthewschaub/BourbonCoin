const userService  = require( "../services/user.service.js" )
const User = require('../models/User');
const keys = require('../config/keys');
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')
const bcrypt = require('bcryptjs')

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

		

		userService.getUser(user).then(existingUser => {
			if(!existingUser){
				return res.status(404).json({message: "User not Found"})		
			} else {

				bcrypt.compare(user.password, existingUser.password).then(isMatch => {
				      if (isMatch) {
				        
				        const payload = { id: existingUser.id, name: existingUser.name} // Create JWT Payload

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
				        )

				      } else {
				        return res.status(400).json({message : "Invalid Password"})
				      }
				    }).catch(err =>  console.log(err))

				
			}
		}).catch(err => {
			console.log(err)
			res.status(500).json({message: err})
		})

		

		

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