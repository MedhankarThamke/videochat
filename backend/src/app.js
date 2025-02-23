import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { log } from "node:console";
import connectToSocket from "./controllers/socketManager.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
  const connectionDb = await mongoose.connect(process.env.MONGO_URI);
  // console.log(`connected to ${connectionDb.connection.host}`);

  server.listen(app.get("port"), () => {
    console.log("listening on port 8000");
  });
};
start();
