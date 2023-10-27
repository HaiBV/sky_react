import { Router } from "express";
import UserRouter from "./users.router";
import AuthRouter from "./auth.router";
import ProfileRouter from "./profile.router";

const router = Router();

[new AuthRouter(), new UserRouter(), new ProfileRouter()].forEach((controllerRoute) => {
  router.use("/", controllerRoute.router);
});

export default router;
