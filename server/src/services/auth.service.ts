import jwt from "jsonwebtoken";
import { IUser } from "@app/interfaces/user.interface";
import UserModel from "@app/models/user.model";

export default class AuthService {
  public userModel: typeof UserModel;

  constructor() {
    this.userModel = UserModel;
  }

  generateToken(user: IUser) {
    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: 36000 });

    return token;
  }
}
