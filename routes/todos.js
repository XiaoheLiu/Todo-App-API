var express = require("express"),
    router  = express.Router(),
    db      = require("../models");
    helpers = require("../helpers/todos")


router.route('/')
// INDEX
    .get(helpers.showTodos)
// CREATE
    .post(helpers.createTodo);

router.route('/:todoid')
// SHOW
    .get(helpers.showTodo)
// PUT
    .put(helpers.updateTodo)
// DELETE
    .delete(helpers.deleteTodo)

module.exports = router;