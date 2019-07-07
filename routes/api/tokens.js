const express = require('express');
const router = express.Router();

const tokensController = require('../../controllers/tokens.controller.js');

// @route   GET api/users/{userId}/tokenRequest
// @desc    Returns all user token requests
// @access  Private
router.get('/users/:userId/tokenRequest', 
	tokensController.getAllUserTokenRequests)



// @route   Post api/users/{userId}/tokenRequest
// @desc    Adds tokenRequest for user with is {userId}
// @access  Private
router.post('/users/:userId/tokenRequest', 
	tokensController.postUserTokenRequest)


// @route   GET api/users/{userId}/tokenRequest/{tokenRequestId}
// @desc    Returns tokenRequest with tokenRequestId for the user with UserId
// @access  Private
router.get('/users/:userId/tokenRequest/:tokenRequestId', 
	tokensController.getUserTokenRequest)


// @route   GET api/users/{userId}/tokens
// @desc    Returns all tokens for user with ID userId
// @access  Private 
router.get('/users/:userId/tokens', 
	tokensController.getAllUserTokens)


// @route   GET api/users/{userId}/tokens/{tokenId}
// @desc    Returns all tokens for user with ID userId
// @access  Private 
router.get('/users/:userId/tokens/:tokenId', 
	tokensController.getUserToken)



module.exports = router;