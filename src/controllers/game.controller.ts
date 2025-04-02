import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { saveGameService } from "../service/game.service";

export const saveGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await saveGameService(req.body);
    res.status(status.OK).json(data);
  } catch (error) {
    next(error);
  }
};
