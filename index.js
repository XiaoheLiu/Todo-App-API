var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser');

var port            = process.env.PORT || 3000;

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/todos", todoRoutes);

// Start Server
app.listen(port, function(err, res){
    if (err) {
        console.log("Server error.");
    } else {
        console.log(`Server is listening at port ${port} .`);
    }
})