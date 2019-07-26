const router = require('express').Router();
const auth = require('middlewares/auth');
const ProfileMiddleware = require('middlewares/profile');
const ProfileController = require('controllers/api/ProfileController');

/* GET user route. */
router.get('/me', auth, ProfileController.detail);
router.post('/', [auth, ProfileMiddleware.validator('createProfile')], ProfileController.storeOrUpdate);
router.delete('/', auth, ProfileController.delete);
router.get('/', auth, ProfileController.getAll);
router.put('/experience', [auth, ProfileMiddleware.validator('addExperience')], ProfileController.addExperience);
router.delete('/experience/:exp_id', auth, ProfileController.deleteExperience);
router.put('/education', [auth, ProfileMiddleware.validator('addEducation')], ProfileController.addEducation);
router.delete('/education/:edu_id', auth, ProfileController.deleteEducation);

module.exports = router;
