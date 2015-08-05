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
					res.locals.data = jwt.sign(user.attributes, process.env.JWT_PRIVATE, {
						algorithm: 'RS256',
						issuer: 'kali',
						expiresInMinutes: 60
					}); 

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
