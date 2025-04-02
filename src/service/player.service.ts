import { db } from "../db";

export const getAllPlayersService = async () => {
  return await db.player.findMany();
};
