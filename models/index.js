var mongoose = require('mongoose');
// mongoose.set('debug', true);
var url  = process.env.DATABASEURL || "mongodb://localhost/todo_app";
mongoose.connect(url, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");