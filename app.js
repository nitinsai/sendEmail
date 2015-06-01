/**
 * Created by nbhoosan on 6/1/2015.
 */


var express = require('express');
var app = module.exports = express();
var  path = require('path');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
app.use(allowCrossDomain)
app.set('port', process.env.PORT || 3000);

app.use(express.cookieParser());

//app.use(express.bodyParser()); old way
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes');

routes(app);

app.listen(app.get('port'), function(){
    console.log("Server Started")
})