import { Router } from "express";
import UserRouter from "./users";
import AuthController from "@app/controllers/AuthController";

const router = Router();

const userRouter = new UserRouter();
router.use("/", userRouter.router);

const authController = new AuthController();
router.use("/auth", authController.index);

export default router;
