var express = require('express');
var multer =require('multer');
// var shortid=require('shortid');

// var db = require('../db');   
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddlewares =require('../middlewares/auth.middlewares');

var upload = multer({ dest: './public/uploads/'});

var router =express.Router();

router.get('/',controller.index);

router.get('/cookie',controller.getCookie);
router.get('/search',controller.search);

router.get('/create', controller.create);

router.get('/:id',controller.get);

router.post('/create',upload.single('avatar'),validate.postCreate, controller.postCreate);


// router.delete('/delete',controller.delete);


// router.listen(port, function(){
//     console.log('Server listening on port' +port);
// });

module.exports = router;