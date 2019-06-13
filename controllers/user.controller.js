const userService  = require( "../services/user.service.js" )
const User = require('../models/User');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');


const createUser = async(req, res) => {

	try {
		const newUser = new User({
	        name: req.body.name,
	        email: req.body.email,
	        password: req.body.password
	      });

		await userService.addUser(newUser)
		res.sendStatus(201)

	} catch (e) {
		console.log(e.message)
		res.sendStatus(500)
	}
	

}

const loginUser = async(req,res) => {

	try {
		
		const user = new User({
			name: req.body.name,
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