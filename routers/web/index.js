const router = require('express').Router();
const IndexController = require('controllers/IndexController');

/* GET user route. */
router.get('/', IndexController.index);

module.exports = router;
