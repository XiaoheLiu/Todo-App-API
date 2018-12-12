var express         = require('express'),
    app             = express();

var port            = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send("working!");
});

// Start Server
app.listen(port, function(err, res){
    if (err) {
        console.log("Server error.");
    } else {
        console.log(`Server is listening at port ${port} .`);
    }
})