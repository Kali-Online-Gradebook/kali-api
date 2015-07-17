module.exports = function (req, res, next) {
	if (!req.route) {
		if (app.get('env') === 'development') {
			res.status(404).send("404: Resource not found.");
		}

		res.status(404).end();
	}

	next();
}