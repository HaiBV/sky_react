import { Document, ObjectId } from "mongoose";
import { JwtPayload } from "jsonwebtoken";

export interface IUser extends Document {
  _id: ObjectId;
  id: ObjectId;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  date?: Date;
}

export interface IUserJwtPayload extends JwtPayload {
  user: Pick<IUser, "id">;
}
