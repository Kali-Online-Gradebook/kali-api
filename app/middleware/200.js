module.exports = function (req, res, next) {
	res.status(200).json({
		status: "success",
		timestamp: Date.now(),
		data: res.locals.data
	});

	next();
};