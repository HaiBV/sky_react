import { Document, Model, Schema, model } from "mongoose";
import { IUser } from "@app/interfaces/user.interface";

const UserSchema = new Schema<IUser & Document>({
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

const User: Model<IUser & Document> = model<IUser & Document>('user', UserSchema);

export default User;
