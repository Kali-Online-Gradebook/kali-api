var express = require('express');
var router = express.Router();
var controllers = require('../controllers')(require('kali-core'));
var jwt = require('express-jwt');

router.use(jwt({ secret: process.env.JWT_PUBLIC, algorithms: ['RS256'] }));

router.route('/students')
	.get(controllers.students.getStudents)
	.post(controllers.students.postStudent);

router.route('/students/:id')
	.get(controllers.students.getStudentById)
	.put(controllers.students.putStudentById);

router.route('/courses')
	.get(controllers.courses.getCourses)
	.post(controllers.courses.postCourse);

router.route('/courses/:id')
	.get(controllers.courses.getCourseById)
	.put(controllers.courses.putCourseById);

module.exports = router;