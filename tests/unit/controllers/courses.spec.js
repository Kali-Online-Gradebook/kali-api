var controllers = require('../../../app/controllers')();

describe('coursesController', function () {
	var req = {};
	var res = {
		json: function () {}
	};

	describe.only('getCourses', function () {
		it('should return a value', function (done) {
			console.log('controller', controllers.students);
			// controllers.students.getCourses(req, res);
			// done(new Error('Not Implemented'));
		});
	});

	describe('getCourseById', function () {
		it('should run', function (done) {
			done(new Error('Not Implemented'));
		});
	});

	describe('postCourse', function () {
		it('should run', function (done) {
			done(new Error('Not Implemented'));
		});
	});

	describe('putCourseById', function () {
		it('should run', function (done) {
			done(new Error('Not Implemented'));
		});
	});
});