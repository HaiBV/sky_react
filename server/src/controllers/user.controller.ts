import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { Container } from "typedi";

import UserService from "@app/services/user.service";
import { IUser } from "@app/interfaces/user.interface";

export default class UserController {
  public userService = Container.get(UserService);

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
