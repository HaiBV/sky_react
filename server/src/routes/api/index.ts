import express from "express";
import usersRouter from "./users";

import AuthController from "@app/controllers/AuthController";

const router = express.Router();

const authController = new AuthController();

router.use("/users", usersRouter);
router.use("/auth", authController.index);

export default router;
