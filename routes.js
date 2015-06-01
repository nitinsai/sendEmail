
/**
 * Created by nbhoosan on 6/1/2015.
 */

var routes = function(app){
    app.get('/sendEmail', function(req, res){
        res.send(200,"OK");
    })
};

module.exports = routes;


