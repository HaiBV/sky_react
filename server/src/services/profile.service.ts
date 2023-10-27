import { Types } from "mongoose";
import ProfileModel from "@app/models/profile.model";
import { IUser } from "@app/interfaces/user.interface";
import { IProfile } from "@app/interfaces/profile.interface";

export default class AuthService {
  public profileModel: typeof ProfileModel;

  constructor() {
    this.profileModel = ProfileModel;
  }

  async getProfile(userId: Pick<IUser, "id">) {
    const profile = await this.profileModel.findOne({ user: userId }).populate("user", ["name", "avatar"]);

    return profile;
  }

  async createOfUpdateProfile(profile: {
    user: string;
    company: string;
    website: string;
    location: string;
    status: string;
    skills: string;
    bio: string;
  }) {
    const { user, company, website, location, status, skills, bio } = profile;

    // const profileFields: IProfile = {
    //   user: new Types.ObjectId(profile.user),
    //   status: profile.status,
    //   skills: profile.skills.split(','),
    // };

		return false
  }
}
