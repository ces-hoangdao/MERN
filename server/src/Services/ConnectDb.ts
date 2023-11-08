import mongoose, { ConnectOptions } from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern-app");
    console.log("connect DB success");
  } catch (error) {
    console.log("connect database error: " + error);
  }
};
