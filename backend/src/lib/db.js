import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectDB = await mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
