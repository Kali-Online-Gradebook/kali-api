var jwt = require('express-jwt');

module.exports = function (req, res, next) {
	jwt({
		secret: process.env.JWT_PUBLIC,
		algorithms: ['RS256']
	});
};