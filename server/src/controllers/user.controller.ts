import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { injectable } from "tsyringe";
import jwt from "jsonwebtoken";
import { IUser } from "@app/interfaces/user.interface";
import UserService from "@app/services/user.service";
import { autobind } from "@app/decorators/autobind";

@injectable()
export default class UserController {
  constructor(public userService: UserService) {}

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

      const payload = {
        user: {
          id: createdUserData.id,
        },
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: 36000 });
      res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
