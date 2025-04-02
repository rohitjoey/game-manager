import { Request, Response, NextFunction } from "express";

export interface ApplicationError extends Error {
  status?: number;
}

export const errorHandler = (
  err: ApplicationError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};
