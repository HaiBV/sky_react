import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { injectable } from "tsyringe";
import { IUser } from "@app/interfaces/user.interface";
import UserService from "@app/services/user.service";

@injectable()
export default class UserController {
  public userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.getAllUser();

      res.status(200).json({ data: users, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const userData: IUser = req.body;
      const createdUserData: IUser = await this.userService.createUser(userData);

      res.status(201).json({ data: createdUserData, message: "created" });
    } catch (error) {
      next(error);
    }
  };
}
