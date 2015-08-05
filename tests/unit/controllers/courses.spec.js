var Promise = require('bluebird');
var sinon = require('sinon');
var should = require('chai').should();
var models = {
	courses: {}
};
var controllers = require('../../../app/controllers')(models);

describe('coursesController', function () {
	var req, res;

	beforeEach(function () {
		// Reset req and res object. Refactor.
		req = {
			params: {},
			body: {}
		};
		res = {
			locals: {}
		};
	});

	describe('getCourses', function () {
		it('should run');
	});

	describe('getCourseById', function () {
		it('should run');
	});

	describe('postCourse', function () {
		it('should run');
	});

	describe('putCourseById', function () {
		it('should run');
	});
});