import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "", {dbName:process.env.DB_NAME});
    console.log(" MongoDB Connected");
  } catch (err) {
    console.error(" MongoDB Connection Failed");
    process.exit(1);
  }
};

export default connectDB;
