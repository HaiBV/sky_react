import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { injectable } from "tsyringe";

import { autobind } from "@app/decorators/autobind";
import { IUser } from "@app/interfaces/user.interface";
import { IProfile } from "@app/interfaces/profile.interface";

import UserService from "@app/services/user.service";
import ProfileService from "@app/services/profile.service";
import AuthService from "@app/services/auth.service";

@injectable()
export default class ProfileController {
  constructor(
    public userService: UserService,
    public authService: AuthService,
    public profileService: ProfileService
  ) {}

  @autobind
  public async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const profile = await this.profileService.getProfile(req.user.id);

      if (!profile) {
        return res.status(400).json({ msg: "There is no profile for this user" });
      }

      res.status(200).json({ data: profile, message: "findAll" });
    } catch (error) {
      next(error);
    }
  }

  @autobind
  public async createOrUpdateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { company, website, location, status, skills, bio } = req.body;

      const profile = await this.profileService.createOfUpdateProfile({
				userId: req.user.id,
        company,
        website,
        location,
        status,
        skills,
        bio,
      });

      if (!profile) {
        return res.status(400).json({ msg: "There is no profile for this user" });
      }

      res.status(200).json({ data: profile, message: "findAll" });
    } catch (error) {
      next(error);
    }
  }
}
