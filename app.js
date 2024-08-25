import express from "express";
import cors from "cors"; 
// use to connect backend with frontend
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

// Setup CORS
const frontendURL = 'http://localhost:5173'; // 5173 becoz we use vite here

app.use(
    cors({
      origin: [frontendURL], // here we use array -> ho skta hum apne project ko 2 ya 3 frontend se individually link krna chahte ho , yha ek hi he
      method: ["GET", "POST", "DELETE", "PUT"], //project k andar konsi methods use krna chahte
      credentials: true,
    })
  );

app.use(cookieParser()); //used for authorization
app.use(express.json()); //parse only json
app.use(express.urlencoded({ extended: true })); //convert string into json format

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/application", applicationRoutes);



dbConnection();

app.use(errorMiddleware);

export default app;
