import { Request, Response } from "express";
import { validationResult } from "express-validator";

export default class UserController {
  constructor() {}

  create(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);

    res.status(201).json({ message: " created" });
  }
}
