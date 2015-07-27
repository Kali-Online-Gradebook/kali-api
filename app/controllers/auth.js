/*
var jwt = require('jsonwebtoken');
var User = require('kali-core').User;
var Promise = require('bluebird');
var bcrypt = Promise.promisifyAll(require('bcrypt'));
*/

module.exports = function (models) {
/*
	return {
		login: function (req, res, next) {
			if (!req.body.user) {
				var err = new Error('Incorrect username or password.');
				err.status = 400;
				return next(err);
			}   

			models.users.findOne({ where: { username: req.body.user.username } })
				.then(function (user) {
					console.log("MyUser", user.dataValues);
					return models.users.checkCredentials(user.dataValues, req.body.user.password);
				})  
				.then(function (user) {
					console.log("JWT USER", user);
					res.locals.data = jwt.sign(user, process.env.JWT_PRIVATE, {
						algorithm: 'RS256',
						issuer: 'myApp',
						expiresInMinutes: 60
					}); 

					next();
				})  
				.catch(function (err) {
					console.error(err);
					err.message = 'Incorrect username or password.';
					err.status = 401;

					return next(err);
				}); 
		},  
		logout: function (req, res, next) {
			next();
		}
	};
*/
};
