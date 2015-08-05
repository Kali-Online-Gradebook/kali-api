require('dotenv').load();
var gulp = require('gulp-help')(require('gulp'));
var Promise = require('bluebird');
var mocha = require('gulp-mocha');
var fs = require('fs');
var node_debug = require('gulp-node-debug');

var paths = {
	unittests: './tests/unit/**/*.spec.js'
};

gulp.task('test', 'Run the kali-api unit tests.', function () {
	process.env.JWT_PUBLIC = fs.readFileSync(process.env.JWT_PUBLIC_PATH);
	process.env.JWT_PRIVATE = fs.readFileSync(process.env.JWT_PRIVATE_PATH);

	return gulp.src(paths.unittests)
		.pipe(mocha({ reporter: 'spec' }));
});

gulp.task('test:debug', 'Debug the kali-api unit tests.', function () {
	process.env.JWT_PUBLIC = fs.readFileSync(process.env.JWT_PUBLIC_PATH);
	process.env.JWT_PRIVATE = fs.readFileSync(process.env.JWT_PRIVATE_PATH);

	return gulp.src(paths.unittests)
		.pipe(node_debug({

		}));
});