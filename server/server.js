import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectDb from "./config/database.js";
import ProjectRouter from "./routes/project-router.js";
import AuthenticatorRouter from "./routes/auth-router.js";

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors({
//   origin: 'https://apexdevs-club.onrender.com',  // Replace with your frontend's actual domain
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));


app.use(cors());
app.use(bodyParser.json());
app.use("/project", ProjectRouter);
app.use('/user', AuthenticatorRouter)



connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
  });
});
