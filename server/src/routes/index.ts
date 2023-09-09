import express, { Request, Response } from "express";

const router = express.Router();
import apiRouter from "./api";

/* GET home page. */
router.get("/", function (req: Request, res: Response) {
  res.send("Express + TypeScript Server");
});

router.use("/api", apiRouter);

export default router;
