const jwt = require('jsonwebtoken');
const config = require('config');
const acl = require('express-acl');

acl.config({
  filename: 'nacl.json',
  baseUrl: '/',
  defaultRole: 'anonymous',
  roleSearchPath: 'user.role'
});

module.exports = function(req, res, next) {
  try {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
      req.user = {
        id: '',
        role: 'anonymous'
      };
    } else {
      // Verify token
      const decoded = jwt.verify(token, config.get('jwtSecret'));

      req.user = decoded.user;
    }

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
