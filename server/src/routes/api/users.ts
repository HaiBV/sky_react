import { Router } from "express";
import UserController from "@app/controllers/UserController";
import { Routers } from "@app/interfaces/routers.interface";
import UserMiddleware from "@app/middlewares/user.middleware";

export default class UserRouter implements Routers {
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
