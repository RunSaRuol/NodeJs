var db = require('../db');
var shortid=require('shortid');

module.exports.index = function(request,response){
    response.render('users/index',{
        users: db.get('users').value()
    });

};

module.exports.search = function(request,response){

    var q = request.query.q;
    var users = db.get('users').value();
    console.log(users);
    console.log(q +"Ruon");
    var matchedUsers = users.filter(function(user){
        return user.name.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) !== -1;

    });
    response.render('users/index',{
        users: matchedUsers

    });
    // console.log(request.query);
}

module.exports.create = function(request,response){
    response.render('users/create');
    }

module.exports.get =function(request,response){
        var id = request.params.id;
        var user = db.get('users').find({id: id}).value();
        console.log(id);
        console.log(user);
        response.render('users/view',{
            user : user
        });
        }
module.exports.postCreate = function(request,response){
    // request.render('users/create');
    // console.log(request.body); 
    // users.push(request.body);
    // response.redirect('')
    request.body.id = shortid.generate();
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
    db.get('users').push(request.body).write();
    response.redirect('/users'); 
    }
//   module.exports.delete = function(request,response){
//       var id =  request.params.id;
//       var user =db.delete('users').
//   }  