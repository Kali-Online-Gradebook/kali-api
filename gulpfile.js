require('dotenv').load();
var gulp = require('gulp-help')(require('gulp'));
var Promise = require('bluebird');
var mocha = require('gulp-mocha');

var paths = {
	unittests: './tests/unit/**/*.spec.js'
};

gulp.task('test', 'Run the kali-api unit tests.', function () {
	return gulp.src(paths.unittests)
		.pipe(mocha({ reporter: 'spec' }));
});