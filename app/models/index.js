var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var db = {};

fs
	.readdirSync(__dirname)
	.filter(function(file) {
		return (file.indexOf('.') !== 0) 
			&& (file !== basename)
			&& (file !== 'db.js') // hack, remove.
			&& (file.split('.').pop() === 'js');
	})
	.forEach(function(file) {
		db[file.split('.')[0]] = require(path.join(__dirname, file));
	});

module.exports = db;

/*
module.exports = {
	assignments: require('./assignments'),
	courses: require('./courses'),
	students: require('./students')
};
*/