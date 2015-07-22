var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var controllers = {};

fs
	.readdirSync(__dirname)
	.filter(function(file) {
		return (file.indexOf('.') !== 0) 
			&& (file !== basename)
			&& (file.split('.').pop() === 'js');
	})
	.forEach(function(file) {
		controllers[file.split('.')[0]] = require(path.join(__dirname, file));
	});

module.exports = controllers;