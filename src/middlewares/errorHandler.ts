import { Request, Response, NextFunction } from "express";
import status from "http-status";
import { Prisma } from "../../generated/prisma";

export interface ApplicationError extends Error {
  status?: number;
}

export const errorHandler = (
  error: ApplicationError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    res.status(status.NOT_ACCEPTABLE).json({
      message: "Prisma related error",
    });
    return;
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    res.status(status.BAD_REQUEST).json({
      message: "Missing or incorrect data",
    });
    return;
  }

  res.status(error.status || 500).json({
    message: error.message || "Internal Server Error",
  });
  return;
};
