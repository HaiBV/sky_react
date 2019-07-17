const router = require('express').Router();
const HomeController = require('../../controllers/HomeController');

/* GET user route. */
router.get('/', HomeController.index);

module.exports = router;
