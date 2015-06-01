
/**
 * Created by nbhoosan on 6/1/2015.
 */

var routes = function(app){
    app.get('/', function(req, res){
        res.send(200,"Server is live !")
    })
    app.get('/sendEmail', function(req, res){

        console.log("CAlled : " + req.ip)
        res.send(200,"OK");
    })
};

module.exports = routes;


