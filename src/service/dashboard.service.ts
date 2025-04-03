import { getAllPlayersService } from "./player.service";

export const getAnalyticsService = async () => {
  return await getAllPlayersService();
};
