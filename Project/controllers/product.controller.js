var db = require('../db');

module.exports.index = function(req,res){
    var page = parseInt(req.query.page) || 1;// n
    perPage =4;//x
    var start=(page-1)*perPage;
    var end =page*perPage;

    var drop = (page-1)* perPage;
    res.render('products/index',{
        // products : db.get('products').value().slice(start,end)
        products : db.get('products').drop(drop).take(perPage).value()

    });
};