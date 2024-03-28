import mongoose from "mongoose";

// PROJECT DATA MODEL
const ProjectCardSchema = new mongoose.Schema({
    projectId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imagelink: {type: String},
    rating: { type: Number },
    date: { type: Date },
    developerName: { type: String },
    technologiesUsed: { type: [String]  },
  });

  const ProjectModel = mongoose.model("projectdata", ProjectCardSchema);

  export default ProjectModel