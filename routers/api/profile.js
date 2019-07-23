const router = require('express').Router();
const auth = require('middlewares/auth');
const ProfileMiddleware = require('middlewares/profile');
const ProfileController = require('controllers/api/ProfileController');

/* GET user route. */
router.get('/me', auth, ProfileController.detail);
router.post('/', [auth, ProfileMiddleware.validator('createProfile')], ProfileController.storeOrUpdate);

module.exports = router;
