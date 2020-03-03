module.exports.postCreate = function(request,response,next){
    var errors = [];
    if(!request.body.name){
        errors.push("Name is requied");
    }
    if(!request.body.phone)
    {
        errors.push("Phone is requied");
    } 
    if(errors.length){
        response.render('users/create',{
            errors : errors,
            values: request.body
        });

        return;
    }
    next();
};