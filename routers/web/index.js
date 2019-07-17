const router = require('express').Router();

router.use('/users', require('./home'));

module.exports = router;
