$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos);

    $('#todoInput').keypress(function(event){
        if (event.which == 13){
            createTodo();
        }
    });

    $('.list').on('click', 'span', function(event){
        event.stopPropagation();
        removeTodo($(this).parent());
    });

    $('.list').on('click', 'li', function(){
        toggleCompleteTodo($(this));
    })
});

function addTodos(todos){
    var i=0;
    todos.forEach(todo => addTodo(todo));
}

function addTodo(todo){
    var newTodo = $(`<li>${todo.name}<span>x</span></li>`);
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    newTodo.addClass("task");
    if (todo.completed){
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

function createTodo(){
    var userInput = $('#todoInput').val();
    $.post('api/todos', {name: userInput})
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(err => console.log(err));
}

function removeTodo(todo){
    deleteid = todo.data('id');
    $.ajax({
        method: "DELETE",
        url:`/api/todos/${deleteid}`
    })
    .then(function(data){
        todo.remove();
    })
    .catch(err => console.log(err));
}

function toggleCompleteTodo(todo){
    todoid = todo.data('id');
    var isDone = todo.data('completed');
    $.ajax({
        method: "PUT",
        url: `/api/todos/${todoid}`,
        data: {completed: ! isDone}
    })
    .then(function(data){
        todo.toggleClass("done");
        todo.data("completed", ! isDone)
    })
}