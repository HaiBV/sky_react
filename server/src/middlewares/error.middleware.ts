import { HttpException } from "@app/exceptions/http.exception";
import { NextFunction, Request, Response } from "express";

export const ErrorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const statusCode: number = error.statusCode || 500;
    const message: string = error.message || "Something went wrong";
    res.status(statusCode).json({ message });
  } catch (error) {
    next(error);
  }
};

export const invalidPathErrorMiddleware = (request: Request, response: Response, next: NextFunction) => {
  response.status(404);
  response.send("invalid path");
};
