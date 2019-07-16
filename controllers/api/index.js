const express = require('express');
const router = express.Router();

router.use('/users', require('./user'));
router.use('/posts', require('./post'));
router.use('/auth', require('./auth'));
router.use('/profile', require('./profile'));

module.exports = router;
