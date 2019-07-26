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
      case 'addExperience': {
        return [
          check('title', 'Title is required')
            .not()
            .isEmpty(),
          check('company', 'Company is required')
            .not()
            .isEmpty(),
          check('from', 'From date is required')
            .not()
            .isEmpty()
        ];
      }
      case 'addEducation': {
        return [
          check('school', 'School is required')
            .not()
            .isEmpty(),
          check('degree', 'Degree is required')
            .not()
            .isEmpty(),
          check('fieldofstudy', 'Field of study is required')
            .not()
            .isEmpty(),
          check('from', 'From date is required')
            .not()
            .isEmpty()
        ];
      }
      default: {
        return [];
      }
    }
  }
};

module.exports = Profile;
