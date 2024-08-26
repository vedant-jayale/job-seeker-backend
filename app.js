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
const frontendURLs = ['http://localhost:5173', 'https://e-job-seeker.netlify.app']; // Array of allowed frontend URLs

app.use(
  cors({
    origin: frontendURLs, // Allow requests from both local development and production Netlify app
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // Allow specific HTTP methods
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
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
