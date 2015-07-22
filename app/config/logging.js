var bunyan = require('bunyan');

module.exports = bunyan.createLogger({
	name: 'kali-api',
	stream: process.stdout,
	level: 'trace'
});