import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncError.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = 'jobsite' 

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("User Not Authorized", 401));
  }

  try{
  const decoded = jwt.verify(token, JWT_SECRET_KEY);
  // check whether the key is belongs to that user token or not

  req.user = await User.findById(decoded.id);

  if (!req.user) {
    return next(new ErrorHandler("User Not Found", 404));
  }

  next(); // authorization k bad ki process kro
}
catch (error) {
  return next(new ErrorHandler("Invalid Token", 401));
}
});