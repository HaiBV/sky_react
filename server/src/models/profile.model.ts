import { Model, Schema, model } from "mongoose";
import { IProfile } from "@app/interfaces/profile.interface";

const ProfileSchema = new Schema<IProfile>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  company: String,
  website: String,
  location: String,
  status: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  bio: String,
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      location: String,
      from: {
        type: Date,
        required: true,
      },
      to: Date,
      current: {
        type: Boolean,
        defautl: false,
      },
      description: String,
    },
  ],
});

const ProfileModel: Model<IProfile> = model<IProfile>("profile", ProfileSchema);

export default ProfileModel;
