const express = require('express');
const router = express.Router();

/* GET user route. */
router.get('/', (req, res, next) => res.send('Profile route'));

module.exports = router;
