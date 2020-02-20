var express = require('express');
// var shortid=require('shortid');

// var db = require('../db');   
var controller = require('../controllers/user.controller');

var router =express.Router();

router.get('/',controller.index);
router.get('/search',controller.search);

router.get('/create', controller.create);

router.get('/:id',controller.get);

router.post('/create', controller.postCreate);

// router.delete('/delete',controller.delete);


// router.listen(port, function(){
//     console.log('Server listening on port' +port);
// });

module.exports = router;