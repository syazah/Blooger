import { User } from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.utils.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(500, "All Fields Are Required"));
  }
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.json({ message: "Sign Up Successful" });
  } catch (error) {
    next(error);
  }
};
