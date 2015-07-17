var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('./app/middleware/cors');
var handle404 = require('./app/middleware/404');

var models = require('./app/models/index');
var routes = require('./app/routes/index');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up CORS.
app.use(cors);

app.use('/', routes);

// catch 404 and forward to error handler
app.use(handle404);

// error handlers

// development error handler
// will print stacktrace
app.use(function (err, req, res, next) {
	var response = {
		status: "fail",
		timestamp: Date.now(),
		message: err.message,
	};

	if (app.get('env') === 'development') {
		response.error = err;
	}

	res.status(err.status || 500);
	res.json(response);
});

module.exports = app;