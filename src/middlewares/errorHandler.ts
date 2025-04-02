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
    switch (error.code) {
      case "P2002":
        res.status(status.CONFLICT).json({
          error: `Unique constraint failed on ${
            error.meta?.target || "unknown field"
          }`,
          message: `${error.meta?.target || "unknown field"} already exists`,
        });
        return;
      case "P2025":
        res.status(status.NOT_FOUND).json({
          error: "Not Found",
          message: "The requested resource could not be found.",
        });
        return;
      default:
        res.status(status.INTERNAL_SERVER_ERROR).json({
          error: "Internal Server Error",
          message: "An unexpected error occurred.",
        });
        return;
    }
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
