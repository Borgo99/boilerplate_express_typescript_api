import { NextFunction, Request, Response } from "express";

export const GET_MSG = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from API!");
};
