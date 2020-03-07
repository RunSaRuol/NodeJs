var express = require('express');
// var shortid=require('shortid');

// var db = require('../db');   
var controller = require('../controllers/product.controller');
// var authMiddlewares =require('../middlewares/auth.middlewares');
var router =express.Router();
router.get('/',controller.index);
router.post('/',controller.create);

// router.post('/login',controller.postLogin);
module.exports=router;