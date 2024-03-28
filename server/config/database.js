import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const DB = process.env.DB_URL;

// DATABASE CONNECTION
const connectDb = async () => {
    try {
      await mongoose.connect(DB);
      console.log("Connection successful to DB");
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  };

export default connectDb