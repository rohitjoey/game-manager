import { Prisma } from "../../generated/prisma";
import { db } from "../db";

export const getAllPlayersService = async () => {
  return await db.player.findMany();
};

export const addPlayerService = async (player: Prisma.PlayerCreateInput) => {
  return await db.player.create({
    data: player,
    select: { id: true, name: true },
  });
};

export const updatePlayerService = async (
  id: string,
  player: Prisma.PlayerUpdateInput
) => {
  return await db.player.update({
    where: { id },
    data: player,
  });
};

export const getPlayerInfoService = async (id: string) => {
  return await db.player.findUnique({
    where: { id },
  });
};
