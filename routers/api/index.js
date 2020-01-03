const router = require('express').Router();

router.use('/user', require('./user'));
router.use('/posts', require('./post'));
router.use('/auth', require('./auth'));
router.use('/profile', require('./profile'));

module.exports = router;
