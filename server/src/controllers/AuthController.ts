import { Request, Response } from "express";

export default class AuthController {
  constructor() {
    console.log("AuthController constructor");
  }

  init(req: Request, res: Response) {
    res.send("AuthController init");
  }
}
