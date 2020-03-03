var express = require('express');
// var shortid=require('shortid');

// var db = require('../db');   
var controller = require('../controllers/cart.controller');
// var validate = require('../validate/user.validate');

var router =express.Router();

router.get('/add/:productId',controller.addToCart);

module.exports = router;