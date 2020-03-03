var express = require('express');
// var shortid=require('shortid');

// var db = require('../db');   
var controller = require('../controllers/transfer.controller');
// var validate = require('../validate/user.validate');

var router =express.Router();

router.get('/create',controller.create);
router.post('/create',controller.postCreate);

module.exports = router;