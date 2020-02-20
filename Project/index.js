var express =require('express');

var bodyParser =require('body-parser');
// var shortid = require('shortid'); 

// var db =require('./db');

var userRoutes = require('./routes/user.route');

var port = 3000;
var app = express();


app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// var users = [
//     {id:1,name :'Thinh'},
//     {id:2,name:'Hung'},
//     {id:2,name:'Hung'}
// ];
app.use(express.static('public'));
app.get('/style/custom.css', function(request,response){
    response.send('abc');
});
app.use('/users',userRoutes);

// app.get('/users',function(request,response){
//     response.render('users/index',{
//         users: db.get('users').value()
//     });

// });
// app.get('/users/search',function(request,response){

//     var q = request.query.q;
//     var users = db.get('users').value();
//     var matchedUsers = users.filter(function(user){
//         return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;

//     });
//     response.render('users/index',{
//         users: matchedUsers

//     });
//     // console.log(request.query);
// });

// app.get('/users/create', function(request,response){
// response.render('users/create');
// });

// app.get('/users/:id',function(request,response){
// var id = parseInt(request.params.id);
// var user = db.get('users').find({id: id}).value();
// console.log(user);
// response.render('users/view',{
//     user : user
// });
// });

// app.post('/users/create', function(request,response){
//     // request.render('users/create');
//     // console.log(request.body); 
//     // users.push(request.body);
//     // response.redirect('/users')
//     request.body.id = shortid.generate();
//     db.get('users').push(request.body).write();
//     response.redirect('/users'); 
//     });


app.listen(port,  function(){
    console.log('Server listening on port' +port);
});