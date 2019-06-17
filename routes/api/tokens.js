const express = require('express');
const router = express.Router();

// @route   GET api/users/{userId}/tokenRequest
// @desc    Returns all user token requests
// @access  Private
router.get('/users/:userId/tokenRequest', 
	(req, res) => {
			let userId = req.params.userId

			res.json({ msg: 'NOT IMPLEMENTED: token request for user ' + userId })
		})

// @route   Post api/users/{userId}/tokenRequest
// @desc    Adds tokenRequest for user with is {userId}
// @access  Private
router.post('/users/:userId/tokenRequest', 
	(req, res) => res.json({ msg: 'NOT IMPLEMENTED: token request Post' }))


// @route   GET api/users/{userId}/tokenRequest/{tokenRequestId}
// @desc    Returns tokenRequest with tokenRequestId for the user with UserId
// @access  Private
router.get('/users/:userId/tokenRequest/:tokenRequestId', 
	(req, res) => {
			let userId = req.params.userId
			let tokenRequestId = req.params.tokenRequestId

			res.json({ msg: 'NOT IMPLEMENTED: token request for user ' 
				+ userId + ' and tokenRequest ' + tokenRequestId })
		})


// @route   GET api/users/{userId}/tokens
// @desc    Returns all tokens for user with ID userId
// @access  Private 
router.get('/users/:userId/tokens', 
	(req, res) => {
			let userId = req.params.userId

			res.json({ msg: 'NOT IMPLEMENTED: tokens  for user ' 
				+ userId})
		})


// @route   GET api/users/{userId}/tokens/{tokenId}
// @desc    Returns all tokens for user with ID userId
// @access  Private 
router.get('/users/:userId/tokens/:tokenId', 
	(req, res) => {
			let userId = req.params.userId
			let tokenId = req.params.tokenId

			res.json({ msg: 'NOT IMPLEMENTED: tokens  for user ' 
				+ userId + ' for token ' + tokenId})
		})

module.exports = router;