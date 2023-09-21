import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import bcrypt from "bcryptjs";
import AuthService from "@app/services/auth.service";
import UserService from "@app/services/user.service";
import { autobind } from "@app/decorators/autobind";
import { IUser } from "@app/interfaces/user.interface";
import { validationResult } from "express-validator";

@autoInjectable()
export default class AuthController {
  constructor(public userService: UserService, public authService: AuthService) {}

  @autobind
  public async index(req: Request, res: Response) {
    const userId = req.user?.id;
    const user = await this.userService.getUser(userId);

    res.status(200).json({ data: user, message: "Auth success" });
  }

  @autobind
  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password }: Pick<IUser, "email" | "password"> = req.body;

      const user = await this.userService.getUserByEmail(email);
      if (!user) {
        return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const token = this.authService.generateToken(user);
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
