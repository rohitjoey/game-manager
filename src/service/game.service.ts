import { SaveGameDTO } from "../models/game.model";
import { getPlayerInfoService, updatePlayerService } from "./player.service";

export const saveGameService = async (saveGameData: SaveGameDTO) => {
  const { player1Id, player2Id, score1, score2 } = saveGameData;

  if (player1Id == player2Id) {
    throw new Error("Choose two different players");
  }

  const player1Data = await getPlayerInfoService(player1Id);
  const player2Data = await getPlayerInfoService(player2Id);

  if (!player1Data || !player2Data) {
    throw new Error("Given player(s) not found");
  }

  player1Data.gamesPlayed += 1;
  player2Data.gamesPlayed += 1;
  player1Data.goalsScored = player1Data.goalsScored + score1;
  player1Data.goalsConceeded = player1Data.goalsConceeded + score2;
  player2Data.goalsScored = player2Data.goalsScored + score2;
  player2Data.goalsConceeded = player2Data.goalsConceeded + score1;
  if (score1 > score2) {
    player1Data.gamesWon += 1;
    player2Data.gamesLost += 1;
  } else {
    player2Data.gamesWon += 1;
    player1Data.gamesLost += 1;
  }

  await updatePlayerService(player1Id, player1Data);
  await updatePlayerService(player2Id, player2Data);

  return { message: "Congratulations, game is finished" };
};
