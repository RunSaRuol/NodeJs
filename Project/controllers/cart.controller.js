var db =require('../db');
module.exports.addToCart = function(request,response,next){
    var productId = request.params.productId;
    var sessionId = request.signedCookies.sessionId;
    if(!sessionId){
        response.redirect('/products');
        return;

    }
    var count = db
    .get('session')
    .find({id: sessionId})
    .get('cart.'+productId,0)
    .value();
                
    db.get('session')
    .find({id: sessionId})
    .set('cart.'+ productId,count +1)
    .write();
    response.redirect('/products');

};