var express = require('express');
var fs = require('fs');
var app = express.createServer();

app.use(express.static('public'));

app.use(express.bodyParser());

app.post('/edit-session', function (req, res) {
    var sessions = JSON.parse(fs.readFileSync("public/sessions.json"));
    sessions[req.body.roomindex][req.body.timeindex] = {
        description: req.body.description
    };
    fs.writeFileSync("public/sessions.json", JSON.stringify(sessions));
    res.end("ok");
});

app.listen(3000);

console.log("Listening on port http://127.0.0.1:3000");
