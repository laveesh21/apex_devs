import {Router} from "express";
import jwt from 'jsonwebtoken';
import ApexUserModel from "../models/userData.js";

const router = Router();

// POST REQUEST : SIGN UP
router.post(`/register`, async(req, res)=>{
  try{
  const newApexUser = new ApexUserModel(req.body);
  newApexUser.userId = "APEX" + Date.now();
  const savedApexUser = await newApexUser.save();
  res.status(200).json(savedApexUser);

  }catch(error){
    console.error("Error adding USER:", error);
    res.status(500).json({ error: "Internal server error" });
  }
})

// POST REQUEST : LOG IN 
router.post(`/login`, async(req, res)=>{
  const {username, password} = req.body;

  try{

    console.log("CHECK LOGIN 2")

    const user = await ApexUserModel.findOne({username, password})
    if(!user){
      return res.status(401).json({error: "INVALID CREDENTIALS"})
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY);
    res.status(200).json({ token });

  }catch(error){
    console.log("ERROR: ", error);
    res.status(500).json({message: "INTERNAL SERVER ERROR OCCURED", error})
  }

})

export default router;
