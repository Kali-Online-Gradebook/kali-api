require('dotenv').load();
var gulp = require('gulp');
var knex = require('knex')({
	client: 'postgresql',
	connection: {
		host: process.env.DB_HOSTNAME,
		user: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		charset: 'utf8'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'migrations'
	}
});
var path = require('path');
var Promise = require('bluebird');

var paths = {
	persistence: 'persistence'
};

gulp.task('migrate:latest', function () {
	process.chdir(path.join(process.cwd(), paths.persistence));

	return knex.migrate.latest({
		migrations: {
			tableName: 'migrations'
		}
	})
		.then(function () {
			return knex.migrate.currentVersion();
		})
		.then(function (version) {
			console.log("Kicked database to version: " + version);
			knex.destroy();
		})
		.catch(function (err) {
			console.error(err);
			knex.destroy();
		});
});

gulp.task('migrate:rollback', function () {
	process.chdir(path.join(process.cwd(), paths.persistence));

	return knex.migrate.rollback({
		migrations: {
			tableName: 'migrations'
		}
	})
		.then(function () {
			return knex.migrate.currentVersion();
		})
		.then(function (version) {
			console.log("Reverted database to version: " + version);
			knex.destroy();
		})
		.catch(function (err) {
			console.error(err);
			knex.destroy();
		});
});