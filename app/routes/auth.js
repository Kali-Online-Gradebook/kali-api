var express = require('express');
var router = express.Router();
var controllers = require('../controllers')(require('kali-core'));

router.route('/login')
	.post(controllers.auth.login);

router.route('/logout')
	.put(controllers.auth.logout);

module.exports = router;