import { Router } from "express";
import UserRouter from "./users.router";
import AuthRouter from "./auth.router";

const router = Router();

[new AuthRouter(), new UserRouter()].forEach((controllerRoute) => {
  router.use("/", controllerRoute.router);
});

export default router;
