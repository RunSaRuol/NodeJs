module.exports.requireAuth = function(request,response,next){
    console.log(request.cookies,request.signedCookies);
    console.log(request.cookies);
 if(!request.signedCookies.userId){
     response.redirect('/auth/login');
     return;
 }
 var user =db.get('users').find({id:request.signedCookies.userId}).value();
 if(!user){
     response.redirect('/auth/login');
     return;
 }
 response.locals.user = user;
 next();
};