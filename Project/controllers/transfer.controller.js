var shortId= require('shortid');

var db = require('../db');
module.exports.create = function(request,response,next){
    response.render('transfer/create');

};
module.exports.postCreate = function(request,response,next){
    var data ={
        id: shortId.generate(),
        amount: parseInt(request.body.amount),
        accountId : request.body.accountId,
        userId : request.signedCookies.userId
    };
    db.get('transfer').push(data).write();
    response.redirect('/transfer/create'); 
};