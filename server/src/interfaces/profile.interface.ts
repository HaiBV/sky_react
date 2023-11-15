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

export interface IEducation {
  school: String;
  degree: String;
  fieldofstudy: String;
  from: Date;
  to?: Date;
  current: Boolean;
  description?: String;
}

export interface IProfile {
  user: Types.ObjectId;
  company?: String;
  website?: String;
  location?: String;
  status: String;
  skills: Array<String>;
  bio?: String;
  experience?: Array<IExperience>;
  education?: Array<IEducation>;
  social?: {
    youtube?: String;
    twitter?: String;
    facebook?: String;
    linkedin?: String;
    instagram?: String;
  };
	date?: Date
}
