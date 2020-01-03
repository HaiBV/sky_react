const router = require('express').Router();
const auth = require('middlewares/auth');
const acl = require('express-acl');
const UserMiddleware = require('middlewares/user');
const AuthController = require('controllers/api/AuthController');

acl.config({
  filename: 'nacl.json',
  baseUrl: '/',
  defaultRole: 'anonymous',
  roleSearchPath: 'user.role'
});

/* GET user route. */
router.get('/', [auth, acl.authorize], AuthController.index);
// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/', UserMiddleware.validator('login'), AuthController.login);

module.exports = router;
