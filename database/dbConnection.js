import mongoose from "mongoose";

const MONGO_URI =  'mongodb+srv://sakshi:sakshi@cluster0.rjjokln.mongodb.net/?retryWrites=true'

export const dbConnection = () => {
  mongoose
    .connect(MONGO_URI, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};