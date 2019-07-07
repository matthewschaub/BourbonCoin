
const passport = require('passport');

//TODO: Implement
//TODO: secure endpoints with jwt


const getAllUserTokenRequests = async(req,res) => {
	res.json({ msg: 'NOT IMPLEMENTED'})
}

const postUserTokenRequest = async(req,res) => {
	res.json({ msg: 'NOT IMPLEMENTED'})	
}

const getUserTokenRequest = async(req,res) => {
	res.json({ msg: 'NOT IMPLEMENTED'})		
}

const getAllUserTokens = async(req,res) => {
	res.json({ msg: 'NOT IMPLEMENTED'})		
}

const getUserToken = async(req,res) => {
	res.json({ msg: 'NOT IMPLEMENTED'})		
}

module.exports = {
	getAllUserTokenRequests,
	postUserTokenRequest,
	getUserTokenRequest,
	getAllUserTokens,
	getUserToken
}