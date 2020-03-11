var  express = require('express');
var routing = require('./routing');

app=express();

app.use('/',routing);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

