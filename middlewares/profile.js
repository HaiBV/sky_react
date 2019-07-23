const { check } = require('express-validator');

Profile = {
  validator: method => {
    switch (method) {
      case 'createProfile': {
        return [
          check('status', 'Status is required')
            .not()
            .isEmpty(),
          check('skills', 'Skills is required')
            .not()
            .isEmpty()
        ];
      }
    }
  }
};

module.exports = Profile;
