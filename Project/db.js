var low = require('lowdb');

var FileSync =  require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

db =low(adapter);
db.defaults({users: [],session : [],transfer:[]}).write();
// db.defaults({products: []}).write();
module.exports = db;