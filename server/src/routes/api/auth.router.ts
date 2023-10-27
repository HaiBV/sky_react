import { Router } from "express";
import { container } from "tsyringe";

import { IRouter } from "@app/interfaces/router.interface";
import { AuthMiddleware } from "@app/middlewares/auth.middleware";
import AuthController from "@app/controllers/auth.controller";

export default class AuthRouter implements IRouter {
  public path = "/auth";
  public router = Router();
  public controller = container.resolve(AuthController);

  constructor() {
    this.initializeRouters();
  }

  initializeRouters() {
    this.router.get(`${this.path}`, AuthMiddleware.auth, this.controller.index);
    this.router.post(`${this.path}`, AuthMiddleware.login(), this.controller.login);
  }
}
