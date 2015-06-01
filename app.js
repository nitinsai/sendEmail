/**
 * Created by nbhoosan on 6/1/2015.
 */


var express = require('express');
var app = module.exports = express();
var  path = require('path');
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