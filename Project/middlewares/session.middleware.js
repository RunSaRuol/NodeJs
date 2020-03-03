var shortId =require('shortid'); 

var db = require('../db');

module.exports = function(request,response,next){
    if(!request.signedCookies.sessionId){
        var sessionId = shortId.generate();
        response.cookie('sessionId',sessionId,{
            signed: true
        });
        db.get('session').push({
            id :sessionId

        }).write();

    }
    next();
}