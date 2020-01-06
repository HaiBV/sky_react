const router = require('express').Router();
const auth = require('middlewares/auth');
const UserMiddleware = require('middlewares/user');
const AuthController = require('controllers/api/AuthController');

/* GET user route. */
router.get('/', auth, AuthController.index);
// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/', UserMiddleware.validator('login'), AuthController.login);

module.exports = router;
