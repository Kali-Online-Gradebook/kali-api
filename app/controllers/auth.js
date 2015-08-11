var jwt = require('jsonwebtoken');

module.exports = function (models) {
	return {
		login: function (req, res, next) {
			if (!req.body.user) {
				var err = new Error('Incorrect username or password.');
				err.status = 401;
				return next(err);
			}   

			models.users.checkUsername(req.body.user.username)
				.then(function (user) {
					return user.checkPassword(req.body.user.password);
				})
				.then(function (user) {
					return user.sanitize();
				})
				.then(function (user) {
					var payload = {};
					payload.user = user.attributes;
					payload.jti = 'somerandomstringoruuid';

					res.locals.data = {
						token: jwt.sign(payload, process.env.JWT_PRIVATE, {
							algorithm: 'RS256',
							issuer: 'kali',
							expiresInMinutes: 60,
						}),
						key: process.env.JWT_PUBLIC
					}; 

					next();
				})  
				.catch(function (err) {
					console.error(err.stack);
					err.message = 'Incorrect username or password.';
					err.status = 401;

					return next(err);
				}); 
		},  
		logout: function (req, res, next) {
			next();
		}
	};
};
