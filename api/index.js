import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
dotenv.config();
const app = express();

//APP USE
app.use(express.json())

//ROUTES
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//SERVER
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Mongo DB is Connected"))
  .catch((err) => console.log(err));
app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running");
});
