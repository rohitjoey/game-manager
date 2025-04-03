import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { Player } from "../../generated/prisma";
import {
  addPlayerService,
  getAllPlayersService,
} from "../service/player.service";

export const getAllPlayers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getAllPlayersService();
    res.status(status.OK).json(data);
  } catch (error) {
    next(error);
  }
};

export const addPlayer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: Player = await addPlayerService(req.body);
    res.status(status.OK).json(data);
  } catch (error) {
    next(error);
  }
};
