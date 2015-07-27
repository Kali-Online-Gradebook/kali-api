var controllers = require('../../../app/controllers')();

describe.only('studentsController', function () {
	var req = {};
	var res = {
		json: function () {}
	};

	describe('getStudents', function () {
		it('should call the next handler', function (done) {
			controllers.students.getStudents(req, res, done);
		});
	});

	describe('getStudentById', function () {
		it('should call the next handler', function (done) {
			controllers.students.getStudentById(req, res, done);
		});
	});

	describe('postStudent', function () {
		it('should call the next handler', function (done) {
			controllers.students.postStudent(req, res, done);
		});
	});

	describe('putStudentById', function () {
		it('should call the next handler', function (done) {
			controllers.students.putStudentById(req, res, done);
		});
	});
});