import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

export default (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err.statusCode) {
    console.log(`\nUnhandled error:\n \t ${err}\n`);
    return res.status(500).json({ message: "Unexpected error." });
  }
  res.status(err.statusCode).json(err.message);
};
