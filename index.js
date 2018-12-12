var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    todoRoutes      = require("./routes/todos"),
    port            = process.env.PORT || 3000;

// App CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

// API Routes
app.use("/api/todos", todoRoutes);

// Static Page
app.get("/", function(req, res){
    res.sendFile("index.html");
});

// Start Server
app.listen(port, function(err, res){
    if (err) {
        console.log("Server error.");
    } else {
        console.log(`Server is listening at port ${port} .`);
    }
})