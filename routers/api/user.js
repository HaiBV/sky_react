const router = require('express').Router();
const auth = require('middlewares/auth');
const UserController = require('controllers/api/UserController');
const UserMiddleware = require('middlewares/user');

router.get('/', UserController.index);
router.post(
  '/store',
  UserMiddleware.validator('createUser'),
  UserController.store
);
router.get('/me', auth, UserController.me);
router.delete('/', auth, UserController.delete);

module.exports = router;
