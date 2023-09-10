import express, { Request, Response } from "express";
import apiRouter from "./api";

const router = express.Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response) {
  res.send("Express + TypeScript Server");
});

router.use("/api", apiRouter);

export default router;
