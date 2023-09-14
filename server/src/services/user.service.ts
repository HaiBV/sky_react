import { IUser } from "@app/interfaces/user.interface";
import { hash } from "bcryptjs";
import UserModal from "@app/models/user.modal";

export default class UserService {
  constructor() {}

  public async getAllUser(): Promise<Array<IUser>> {
    const users: Array<IUser> = await UserModal.find();

    return users;
  }

  public async createUser(userData: IUser): Promise<IUser> {
    const findUser: IUser | null = await UserModal.findOne({ email: userData.email });

    if (findUser) {
      throw new Error("This email already exists");
    }

    const hashedPassword = await hash(userData.password, 10);
    const createdUserData: IUser = await UserModal.create({ ...userData, password: hashedPassword });

    return createdUserData;
  }
}

export const userService = new UserService();
