import mongoose from "mongoose";

// USER DATA MODEL
const ApexUserSchema = new mongoose.Schema({
    userId: { type: String, auto: true , unique: true}, // Unique ID (ObjectId)
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    aggrement: { type:String, require:true},
  });

const ApexUserModel = mongoose.model("apexusersdata", ApexUserSchema);

export default ApexUserModel