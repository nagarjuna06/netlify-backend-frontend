import ServerlessHttp from "serverless-http";
import express from "express";
import { Router } from "express";
import { connectDb, practiceQuestionModel } from "./model";
const app = express();
const router = Router();
connectDb();
router.get("/data", async (req, res) => {
  const data = await practiceQuestionModel.find();
  res.send(data);
});
router.get("/", (req, res) => {
  res.send("quiz api");
});
app.use("/api", router);
export const handler = ServerlessHttp(app);
