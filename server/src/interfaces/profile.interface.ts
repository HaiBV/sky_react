import { Document, Types } from "mongoose";

export interface IExperience {
  title: String;
  company: String;
  location?: String;
  from: Date;
  to?: Date;
  current: Boolean;
  description?: String;
}

export interface IProfile extends Document {
  user: Types.ObjectId;
  company?: String;
  website?: String;
  location?: String;
  status: String;
  skills: Array<String>;
  bio?: String;
  experience: Array<IExperience>;
}
