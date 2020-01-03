const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    role: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

class UserModel {
  get contact() {
    return `${this.name} - ${this.email}`;
  }
}

UserSchema.loadClass(UserModel);

module.exports = User = mongoose.model('user', UserSchema);
