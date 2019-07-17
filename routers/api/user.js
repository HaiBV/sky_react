const router = require('express').Router();
const UserController = require('controllers/api/UserController');
const UserMiddleware = require('middlewares/user');

router.get('/', (req, res, next) => res.send('User route'));
router.post(
  '/store',
  UserMiddleware.validator('createUser'),
  UserController.store
);

module.exports = router;
