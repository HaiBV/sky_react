import { check } from "express-validator";

export default class ProfileMiddleware {
  static create() {
    return [
      check("status", "Status is required").not().isEmpty(),
      check("skills", "Skills is required").not().isEmpty(),
    ];
  }
}
