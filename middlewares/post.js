const { check } = require('express-validator');

Post = {
  validator: method => {
    switch (method) {
      case 'createPost': {
        return [
          check('text', 'Text is required')
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

module.exports = Post;
