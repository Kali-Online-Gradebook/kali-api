var bookshelf = require('../config/db');

module.exports = bookshelf.Model.extend({
	tableName: 'courses'
});