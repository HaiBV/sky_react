const router = require('express').Router();
const auth = require('middlewares/auth');
const AuthController = require('controllers/api/AuthController');

/* GET user route. */
router.get('/', auth, AuthController.index);

module.exports = router;
