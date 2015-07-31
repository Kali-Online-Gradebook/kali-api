var Promise = require('bluebird');
var sinon = require('sinon');
var should = require('chai').should();
var models = {
	students: {}
};
var controllers = require('../../../app/controllers')(models);

describe.only('studentsController', function () {
	var req, res;

	beforeEach(function () {
		// Reset req and res object.
		req = {
			params: {},
			body: {}
		};
		res = {
			locals: {}
		};
	});

	describe('getStudents', function () {
		var myStudents = [
			{ created_at: pg_date(), updated_at: pg_date(), student_id: 'b36d235a-0bc8-497e-8f40-48cff3671006', name: 'Jedd AHyoung' },
			{ created_at: pg_date(), updated_at: pg_date(), student_id: '29f1408a-359a-42af-86ae-497b925a864d', name: 'Andrea Albright' },
			{ created_at: pg_date(), updated_at: pg_date(), student_id: '7b912420-5849-42ab-ad1c-9a7f173a4f1a', name: 'Jennifer Dixon' },
			{ created_at: pg_date(), updated_at: pg_date(), student_id: 'c8fcdc80-71a6-4b58-8abe-2ee90ecde08a', name: 'Matthew Giebeig' },
			{ created_at: pg_date(), updated_at: pg_date(), student_id: '37d91790-60ca-423a-b860-460b66012e04', name: 'Micky Sakora' }
		];

		it('should set res.locals.data with the student data', function (done) {
			models.students.all = sinon.stub().returns(Promise.resolve(myStudents));
			controllers.students.getStudents(req, res, function (err) {
				if (err) throw err;

				res.locals.data.should.eql(myStudents);
				done();
			});
		});
	});

	describe('getStudentById', function () {
		var myStudent = { created_at: pg_date(), updated_at: pg_date(), student_id: 'b36d235a-0bc8-497e-8f40-48cff3671006', name: 'Jedd AHyoung' };

		it('should set res.locals.data with the student data', function (done) {
			models.students.get = sinon.stub().returns(Promise.resolve(myStudent));
			req.params.id = myStudent.student_id;
			controllers.students.getStudentById(req, res, function (err) {
				if (err) throw err;

				models.students.get.calledWith(myStudent.student_id).should.be.true;
				res.locals.data.should.eql(myStudent);
				done();
			});
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

function pg_date() {
    return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
}