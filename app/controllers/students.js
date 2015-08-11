module.exports = function (models) {
	return {
		getStudents: function (req, res, next) {
			var student = models.students.context({
				user_id: req.user.user_id
			});

			student.all()
				.then(function (students) {
					res.locals.data = students;
					next();
				})
				.catch(next);
		},
		getStudentById: function (req, res, next) {
			var context = {
				user_id: req.user.user_id
			};

			models.students.get(context, req.params.id)
				.then(function (student) {
					res.locals.data = student;

					next();
				})
				.catch(next);
		},
		postStudent: function (req, res, next) {
			var context = {
				user_id: req.user.user_id
			};

			models.students.add(context, req.body.student)
				.then(function (student) {
					res.locals.data = student;

					next();
				})
				.catch(next);
		},
		putStudentById: function (req, res, next) {
			var context = {
				user_id: req.user.user_id
			};

			models.students.update(context, req.body.student, req.params.id)
				.then(function (student) {
					res.locals.data = student;

					next();
				})
				.catch(next);
		}
	};
};