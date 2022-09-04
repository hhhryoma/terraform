const serverlessExpress = require('aws-serverless-express/middleware');
var express = require('express');
var path = require('path');
var app = express();

app.use(serverlessExpress.eventContext());

// app.get('/', (req, res) => {
//     res.send({message: "Hello World"});
// });

app.get('/', (req, res) =>{
    res.sendFile('test-site.html', {root: __dirname});
});

const syaindata = {
    1: {id: 1, name: "hishida ryoma", "age": 999, birth: "1993-07-14"},
    2: {id: 2, name: "kameyama kaoru", "age": 111, birth: "1993-07-14"},
    3: {id: 3, name: "kanbe takeru", "age": 222, birth: "1993-07-14"},
    4: {id: 4, name: "sugisita ukyo", "age": 333, birth: "1993-07-14"},
}
app.get('/web-api', (req, res) =>{
    res.json(syaindata[req.query.id]);
});

// app.get('/web-api', (req, res) =>{
//     res.json({name: "hishida ryoma", "age": 999, birth: "1993-07-14"});
//});
module.exports = app