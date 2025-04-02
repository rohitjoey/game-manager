import { DashboardDTO } from "../models/dashboard.dto";
import { getAllPlayersService } from "./player.service";

export const getAnalyticsService = async () => {
  const allPlayers = await getAllPlayersService();

  const response: DashboardDTO[] = allPlayers.map((player) => {
    const ratio = Number((player.gamesWon / player.gamesPlayed).toFixed(2));
    const gd = player.goalsScored - player.goalsConceeded;

    return { ...player, ratio, gd };
  });

  return response;
};
