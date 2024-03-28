import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectDb from "./config/database.js";
import ProjectRouter from "./routes/project-router.js";
import AuthenticatorRouter from "./routes/auth-router.js";

const app = express();
const PORT = process.env.PORT || 5000;



app.use(bodyParser.json());
app.use(cors());
app.use("/project", ProjectRouter);
app.use('/user', AuthenticatorRouter)



connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
  });
});
