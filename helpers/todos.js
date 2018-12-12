var db = require("../models/index.js");

exports.showTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createTodo = function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.showTodo = function(req, res){
    db.Todo.findById(req.params.todoid)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateTodo = function(req, res){
    db.Todo.findByIdAndUpdate(req.params.todoid, req.body, {new: true})
    .then(function(updatedTodo){
        res.json(updatedTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteTodo = function(req, res){
    db.Todo.findByIdAndRemove(req.params.todoid)
    .then(function(){
        res.json({message: 'Todo is deleted.'});
    })
    .catch(function(err){
        res.send(err);
    })
}