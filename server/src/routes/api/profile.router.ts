import { Router } from "express";
import { IRouter } from "@app/interfaces/router.interface";
import { container } from "tsyringe";
import ProfileController from "@app/controllers/profile.controller";
import { AuthMiddleware } from "@app/middlewares/auth.middleware";
import ProfileMiddleware from "@app/middlewares/profile.middleware";

export default class ProfileRouter implements IRouter {
  public path = "/profile";
  public router = Router();
  public controller = container.resolve(ProfileController);

  constructor() {
    this.initializeRouters();
  }

  initializeRouters() {
    this.router.get(`${this.path}/me`, AuthMiddleware.auth, this.controller.getProfile);
    this.router.post(`${this.path}/`, [AuthMiddleware.auth, ...ProfileMiddleware.create()], this.controller.createOrUpdateProfile);
    this.router.post(`${this.path}/experience`, [AuthMiddleware.auth, ...ProfileMiddleware.updateExperience()], this.controller.createOrUpdateProfile);
  }
}
