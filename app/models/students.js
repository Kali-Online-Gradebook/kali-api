var bookshelf = require('./db');

module.exports = bookshelf.Model.extend({
	tableName: 'students'
});