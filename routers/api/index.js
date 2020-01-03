const router = require('express').Router();
const acl = require('express-acl');

router.use('/user', require('./user'));
router.use('/posts', require('./post'));
router.use('/auth', acl.authorize, require('./auth'));
router.use('/profile', require('./profile'));

acl.config({
  filename: 'nacl.json',
  baseUrl: '/',
  defaultRole: 'admin'
});

router.use(acl.authorize);

module.exports = router;
