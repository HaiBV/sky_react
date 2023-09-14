import { IUser } from "@app/interfaces/user.interface";
import { hash } from "bcryptjs";
import User from "@app/models/User";

export default class UserService {
  constructor() {}

  public async getAllUser(): Promise<Array<IUser>> {
    const users: Array<IUser> = await User.find();

    return users;
  }

  public async createUser(userData: IUser): Promise<IUser> {
    const findUser: IUser | null = await User.findOne({ email: userData.email });

    if (findUser) {
      throw new Error("This email already exists");
    }

    const hashedPassword = await hash(userData.password, 10);
    const createdUserData: IUser = await User.create({ ...userData, password: hashedPassword });

    return createdUserData;
  }
}

export const userService = new UserService();
