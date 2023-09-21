import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { injectable } from "tsyringe";

import { autobind } from "@app/decorators/autobind";
import { IUser } from "@app/interfaces/user.interface";

import UserService from "@app/services/user.service";
import AuthService from "@app/services/auth.service";

@injectable()
export default class UserController {
  constructor(public userService: UserService, public authService: AuthService) {}

  @autobind
  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getAllUser();

      res.status(200).json({ data: users, message: "findAll" });
    } catch (error) {
      next(error);
    }
  }

  @autobind
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const userData: IUser = req.body;
      const createdUserData: IUser = await this.userService.createUser(userData);

      const token = this.authService.generateToken(createdUserData);
      res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
