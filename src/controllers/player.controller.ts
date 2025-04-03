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
    const response = data.map((player) => {
      return { id: player.id, name: player.name };
    });
    res.status(status.OK).json(response);
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
    const data = await addPlayerService(req.body);
    res.status(status.OK).json(data);
  } catch (error) {
    next(error);
  }
};
