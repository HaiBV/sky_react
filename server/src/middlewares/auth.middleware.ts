import { IUserJwtPayload } from "@app/interfaces/user.interface";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
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
};
