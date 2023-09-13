import { check } from "express-validator";

const MIN_PASSWORD_LENGTH = 8;

export default class UserMiddleware {
  static create() {
    return [
      check("name", "Name is required").not().isEmpty(),
      check("email", "Please include a valid email").isEmail(),
      check("password", `Please enter a password with ${MIN_PASSWORD_LENGTH} or more characters`).isLength({ min: MIN_PASSWORD_LENGTH }),
    ];
  }
}
