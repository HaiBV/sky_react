import { Model, Schema, model } from "mongoose";
import { IUser } from "@app/interfaces/user.interface";

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniqui: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const UserModel: Model<IUser> = model<IUser>('user', UserSchema);

export default UserModel;
