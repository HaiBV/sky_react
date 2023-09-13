import { Document, Model, Schema, model } from "mongoose";

export interface IUser extends Document{
  name: string;
  email: string;
  password: string;
  avatar?: string;
  date?: Date;
}

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

const User: Model<IUser> = model<IUser>('user', UserSchema);

export default User;
