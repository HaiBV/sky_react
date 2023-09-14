import { Router } from "express";
import { IRouter } from "@app/interfaces/router.interface";
import UserMiddleware from "@app/middlewares/user.middleware";
import UserController from "@app/controllers/user.controller";

export default class UserRouter implements IRouter {
  public path = "/users";
  public router = Router();
  public user = new UserController();

  constructor() {
    this.initializeRouters();
  }

  initializeRouters() {
    this.router.post(`${this.path}/store`, UserMiddleware.create(), this.user.create);
    this.router.get(`${this.path}`, this.user.getUsers);
  }
}
