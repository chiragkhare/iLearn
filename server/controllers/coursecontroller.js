var restful = require('node-restful');

module.exports = function(app,route) {

//setup the controller for REST
var rest= restful.model(
	'course',
	app.models.course
	).methods(['get','put','post','delete']);

	//Register this endpoint with the application
	rest.register(app,route);

	//return middleware.
	return function(req, res, next){
		next();
	};
};