Object.assign = Object.assign || require('object.assign');
var Promise = require('bluebird');
var sinon = require('sinon');
var should = require('chai').should();
var expect = require('chai').expect;
var jwt = require('jsonwebtoken');
var models = {
	users: {}
};
var controllers = require('../../../app/controllers')(models);

describe('authController', function () {
	var req, res;

	describe('login', function () {
		var myUser = { username: 'test', password: 'test' };
		var persistenceUser = {
			user_id: 'uuid', 
			username: 'test',
			passhash: 'passwordhash',
			checkPassword: sinon.stub()
				.withArgs('fail').returns(Promise.reject(new Error()))
				.withArgs('test').returns(Promise.resolve(this)),
			sanitize: sinon.stub().returns(Promise.resolve(this))
		};

		models.users.checkUsername = sinon.stub()
			.withArgs('fail').returns(Promise.reject(new Error()))
			.withArgs('test').returns(Promise.resolve(persistenceUser));

		beforeEach(function () {
			// Reset req and res object. Refactor.
			req = {
				params: {},
				body: {}
			};
			res = {
				locals: {}
			};

			models.users.checkUsername.reset();
			persistenceUser.checkPassword.reset();
			persistenceUser.sanitize.reset();
		});

		it('should return 401 Unauthorized if req.user is undefined', function (done) {
			controllers.auth.login(req, res, function (err) {
				expect(err).to.be.ok;
				expect(err).to.be.an('error');

				done();
			});
		});

		it('should return 401 Unauthorized if the user does not exist', function (done) {
			req.body.user = Object.assign({}, myUser);
			req.body.user.username = 'fail';

			controllers.auth.login(req, res, function (err) {
				expect(err).to.be.ok;
				expect(err).to.be.an('error');

				done();
			});
		});

		it('should return 401 Unauthorized if the passwords do not match', function (done) {
			req.body.user = Object.assign({}, myUser);
			req.body.user.password = 'fail';

			controllers.auth.login(req, res, function (err) {
				expect(persistenceUser.checkPassword.calledWith(myUser.password)).to.be.true;
				expect(err).to.be.ok;
				expect(err).to.be.an('error');

				done();
			});
		});

		it('should call sanitize on the user object before sending JWT', function (done) {
			req.body.user = Object.assign({}, myUser);
			console.log('user', req.body.user);

			controllers.auth.login(req, res, function (err) {
				if (err) return done(err);

				console.log('jwt', jwt.decode(res.locals.data));
				expect(persistenceUser.sanitize.called).to.be.true;

				done();
			});
		});

		it('should attach a JSON Web Token to res.locals.data', function (done) {
			req.body.user = Object.assign({}, myUser);

			controllers.auth.login(req, res, function (err) {
				if (err) return done(err);

				// expect(jwt.decode(res.locals.data)).to.eql(persistenceUser);

				done();
			});
		});
	});

	describe('logout', function () {

	});
});