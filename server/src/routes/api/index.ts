import { Router } from "express";
import UserRouter from "./users.router";

const router = Router();

[new UserRouter()].forEach((controllerRoute) => {
  router.use("/", controllerRoute.router);
});

export default router;
