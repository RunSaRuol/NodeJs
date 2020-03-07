var md5 = require('md5');
var db = require('../db');

// var shortid=require('shortid');


module.exports.login = function(request,response){
    response.render('auth/login');  
};

module.exports.postLogin = function(request,response){
    var email = request.body.email;
    var password =request.body.password;
    var user =db.get('users').find({email:email}).value();
    if(!user){
    response.render('auth/login',{
        errors:[
            // 'User does not exit. '
            'Ông Chú Còn Không Biết mà!!!'
        ],
        
        values :request.body
    });  
    return;
    
    }
    var hashedPassword = md5(password);
    if(user.password !== hashedPassword){
        response.render('auth/login',{
            errors:[
                // 'Wrong password.'
                'Ông Chú Còn Không Biết mà!!!'
            ],
            values :request.body

        });
        return;
    }
    response.cookie('userId',user.id,{
        signed: true
    });
    response.redirect('/users');
};