const router = require('express').Router();
const acl = require('express-acl');

router.use('/', require('./web'));
router.use('/api', require('./api'));

module.exports = router;
