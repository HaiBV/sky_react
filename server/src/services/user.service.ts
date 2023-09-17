import { hash } from "bcryptjs";
import { Service } from "typedi";
import { IUser } from "@app/interfaces/user.interface";
import UserModal from "@app/models/user.modal";
import { HttpException } from "@app/exceptions/http.exception";

@Service()
export default class UserService {
  userModal: typeof UserModal;
  constructor() {
    this.userModal = UserModal;
  }

  public async getAllUser(): Promise<Array<IUser>> {
    const users: Array<IUser> = await this.userModal.find();

    return users;
  }

  public async createUser(userData: IUser): Promise<IUser> {
    const findUser: IUser | null = await this.userModal.findOne({ email: userData.email });

    if (findUser) {
      throw new HttpException(400, "This email already exists");
    }

    const hashedPassword = await hash(userData.password, 10);
    const createdUserData: IUser = await this.userModal.create({ ...userData, password: hashedPassword });

    return createdUserData;
  }
}

export const userService = new UserService();
