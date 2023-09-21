import { Request, Response } from "express";
import { autoInjectable } from "tsyringe";

import AuthService from "@app/services/auth.service";
import UserService from "@app/services/user.service";
import { autobind } from "@app/decorators/autobind";

@autoInjectable()
export default class AuthController {
  constructor(public userService: UserService, public authService: AuthService) {}

  @autobind
  public async index(req: Request, res: Response) {
    const userId = req.user?.id;
    const user = await this.userService.getUser(userId);

    res.status(200).json({ data: user, message: "Auth success" });
  }
}
