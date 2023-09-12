import { Request, Response } from "express";

export default class AuthController {
  constructor() {
    console.log("AuthController");
  }

  index(req: Request, res: Response) {
    res.send("AuthController:index");
  }
}
