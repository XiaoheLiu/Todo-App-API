var express = require("express"),
    router  = express.Router(),
    db      = require("../models/index.js");

// INDEX
router.get('/', function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
});

// POST
router.post('/', function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
});

// SHOW
router.get('/:todoid', function(req, res){
    db.Todo.findById(req.params.todoid)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })

});

// PUT
router.put('/:todoid', function(req, res){
    db.Todo.findByIdAndUpdate(req.params.todoid, req.body, {new: true})
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});

// DELETE
router.delete('/:todoid', function(req, res){
    db.Todo.findByIdAndRemove(req.params.todoid)
    .then(function(){
        res.json({message: 'Todo is deleted.'});
    })
    .catch(function(err){
        res.send(err);
    })
});

module.exports = router;