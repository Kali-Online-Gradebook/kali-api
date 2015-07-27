var courses = [
	{
		id: 1,
		title: 'Math',
		description: 'Fourth Grade Mathematics',
		assignments: [
			{ maximum: 13, name: 'Addition 1' },
			{ maximum: 5, name: 'Subtraction 3' },
			{ maximum: 100, name: 'Multiplication 3' },
			{ maximum: 50, name: 'Division 3' },
			{ maximum: 25, name: 'Fractions 3' },
			{ maximum: 20, name: 'Decimals 3' },
			{ maximum: 10, name: 'Large Numbers 3' },
			{ maximum: 100, name: 'Exponents 3' },
			{ maximum: 100, name: 'Percentages 3' },
			{ maximum: 100, name: 'Finance 3' },
			{ maximum: 100, name: 'Algebra 3' },
			{ maximum: 100, name: 'Calculus 3' },
			{ maximum: 100, name: 'Geometry 3' },
			{ maximum: 100, name: 'Subtraction 3' },
			{ maximum: 100, name: 'Subtraction 3' },
			{ maximum: 100, name: 'Subtraction 3' },
			{ maximum: 100, name: 'Subtraction 3' },
			{ maximum: 100, name: 'Subtraction 3' },
		],
	},
	{
		id: 2,
		title: 'Science',
		description: 'Fifth Grade Science',
		assignments: [
			{ maximum: 100, name: 'Biology 1' },
			{ maximum: 100, name: 'Earth Science 3' },
		],
	},
	{
		id: 3,
		title: 'History',
		description: 'Fourth Grade History',
		assignments: [
			{ maximum: 100, name: 'American 1' },
			{ maximum: 100, name: 'World 3' },
		],
	}
];

module.exports = function (models) {
	return {
		getCourses: function (req, res, next) {
			res.json(courses);
		},
		getCourseById: function (req, res, next) {

		},
		postCourse: function (req, res, next) {

		},
		putCourseById: function (req, res, next) {

		}
	};
};