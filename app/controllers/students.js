module.exports = function (models) {
	return {
		getStudents: function (req, res, next) {
			models.students.all()
				.then(function (students) {
					res.locals.data = students;
					next();
				})
				.catch(next);
		},
		getStudentById: function (req, res, next) {
			models.students.get(req.params.id)
				.then(function (student) {
					res.locals.data = student;

					next();
				})
				.catch(next);
		},
		postStudent: function (req, res, next) {
			models.students.add(req.body.student)
				.then(function (student) {
					res.locals.data = student;

					next();
				})
				.catch(next);
		},
		putStudentById: function (req, res, next) {
			models.students.update(req.body.student, req.params.id)
				.then(function (student) {
					res.locals.data = student;

					next();
				})
				.catch(next);
		}
	};
};