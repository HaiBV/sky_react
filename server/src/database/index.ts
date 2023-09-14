import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI!);

    console.log("MongoDB Connected...");
  } catch (error: any) {
    console.log(error.message);

    process.exit(1);
  }
};
