const userService  = require( "../services/user.service.js" )
const User = require('../models/User');


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



module.exports = {
	createUser
}