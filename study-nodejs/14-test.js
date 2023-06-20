const express = require('express');
const app = express();
const bodyParser = require('./14-自定义中间件');
app.use(bodyParser);


app.post('/user', function (req, res) {
    console.log(req.body);
    res.send(req.body);  
})

app.listen(80, function () {
    console.log("127.0.0.1");
})