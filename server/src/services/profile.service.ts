import { Types } from "mongoose";
import ProfileModel from "@app/models/profile.model";
import { IUser } from "@app/interfaces/user.interface";
import { IExperience, IProfile } from "@app/interfaces/profile.interface";

export default class AuthService {
  public profileModel: typeof ProfileModel;

  constructor() {
    this.profileModel = ProfileModel;
  }

  async getProfile(userId: Pick<IUser, "id">) {
    const profile = await this.profileModel.findOne({ user: userId }).populate("user", ["name", "avatar"]).lean();

    return profile;
  }

  async createOfUpdateProfile(profileData: {
    userId: string;
    company: string;
    website: string;
    location: string;
    status: string;
    skills: string;
    bio: string;
  }) {
    const { userId, company, website, location, status, skills, bio } = profileData;

    const profile = await this.profileModel.findOne({ user: userId });

    if (profile) {
      profile.company = company;
      profile.website = website;
      profile.location = location;
      profile.status = status;
      profile.skills = skills.split(",");
      profile.bio = bio;

      await profile.save();

      return profile;
    }

    const profileFields: IProfile = {
      user: new Types.ObjectId(userId),
      status: status,
      skills: skills.split(","),
      bio: bio,
      company: company,
      website: website,
      location: location,
    };

    const newProfile = this.profileModel.create(profileFields);

    return newProfile;
  }

  async updateExperience(userId: string, experienceData: IExperience) {
    const profile = await this.profileModel.findOne({ user: userId });

    const {} = experienceData;
  }
}
