import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import jwt from "jsonwebtoken";
import { IUserJwtPayload } from "@app/interfaces/user.interface";

export class AuthMiddleware {
  static auth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["x-auth-token"] as string | undefined;

    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as IUserJwtPayload;
      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(401).json({ message: "Token is not valid" });
    }
  }

  static login() {
    return [check("email", "Please include a valid email").isEmail(), check("password", `Password is required`).exists()];
  }
}
