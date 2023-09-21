import { IUser } from "@app/interfaces/user.interface";
import { hash } from "bcryptjs";
import UserModel from "@app/models/user.model";
import { HttpException } from "@app/exceptions/http.exception";

export default class UserService {
  public userModel: typeof UserModel;
  constructor() {
    this.userModel = UserModel;
  }

  public getAllUser = async (): Promise<Array<IUser>> => {
    const users: Array<IUser> = await this.userModel.find();

    return users;
  };

  public getUser = async (userId: Pick<IUser, "id">): Promise<IUser | null> => {
    const user: IUser | null = await this.userModel.findById(userId);

    return user;
  };

  public createUser = async (userData: IUser): Promise<IUser> => {
    const findUser: IUser | null = await this.userModel.findOne({ email: userData.email });

    if (findUser) {
      throw new HttpException(400, "This email already exists");
    }

    const hashedPassword = await hash(userData.password, 10);
    const createdUserData: IUser = await this.userModel.create({ ...userData, password: hashedPassword });

    return createdUserData;
  };
}
