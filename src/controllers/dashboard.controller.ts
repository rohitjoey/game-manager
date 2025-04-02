import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { getAnalyticsService } from "../service/dashboard.service";

export const getAnalytics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAnalyticsService();
    res.status(status.OK).json(data);
  } catch (error) {
    next(error);
  }
};
