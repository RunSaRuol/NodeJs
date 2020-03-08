// var db = require('../db');
var User = require('../../models/user.model');

module.exports.index = async function(req,res){
    var users = await User.find();
   res.json(users);


//      Product.find().then(function(products){
//     res.render('products/index',{
//         products:products

//     });
// });

};
module.exports.create =async function(req,res){
     var user = await User.create(req.body)
     res.json(user);
}