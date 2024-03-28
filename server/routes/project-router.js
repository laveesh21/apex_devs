import { Router } from "express";
import ProjectModel from "../models/projectCardData.js";

const router = Router();

// GET REQUEST FOR PROJECT
router.get(`/`, async (req, res) => {
  try {
    const projects = await ProjectModel.find({});
    res.status(201).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//  POST REQUEST : PROJECT UPLOAD
router.post(`/upload`, async (req, res) => {
  try {
    const newProject = new ProjectModel(req.body);
    newProject.projectId = "PROJECT" + Date.now();
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET REQUEST FOR A SINGLE PROJECT 
router.get(`/:projectId`, (req, res) => {
  const projectId = req.params.projectId;
  ProjectModel.findOne({ projectId })
    .then((projectData) => {
      if (projectData) {
        res.json(projectData);
      } else {
        res.status(404).json({ error: "Project Does Not Exist" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

export default router;
