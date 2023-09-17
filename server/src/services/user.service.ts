import { IUser } from "@app/interfaces/user.interface";
import { hash } from "bcryptjs";
import UserModal from "@app/models/user.modal";
import { HttpException } from "@app/exceptions/http.exception";

export default class UserService {
  public userModal: typeof UserModal;
  constructor() {
    this.userModal = UserModal;
  }

  public getAllUser = async (): Promise<Array<IUser>> => {
    const users: Array<IUser> = await this.userModal.find();

    return users;
  };

  public createUser = async (userData: IUser): Promise<IUser> => {
    const findUser: IUser | null = await this.userModal.findOne({ email: userData.email });

    if (findUser) {
      throw new HttpException(400, "This email already exists");
    }

    const hashedPassword = await hash(userData.password, 10);
    const createdUserData: IUser = await this.userModal.create({ ...userData, password: hashedPassword });

    return createdUserData;
  };
}
