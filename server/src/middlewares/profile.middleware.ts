import { check } from "express-validator";

export default class ProfileMiddleware {
  static create() {
    return [
      check("status", "Status is required").not().isEmpty(),
      check("skills", "Skills is required").not().isEmpty(),
    ];
  }

  static updateExperience() {
    return [
      check("title", "Job title field is required").not().isEmpty(),
      check("company", "Company field is required").not().isEmpty(),
      check("from", "From date field is required").not().isEmpty(),
    ];
  }
}
