import { Router } from "express";
import { getAllPlayers } from "../controllers/player.controller";

//api/players
const playerRouter = Router();
playerRouter.get("/", getAllPlayers);
// playerRouter.post("/add", addPlayers);
// playerRouter.get("/:playerId", getPlayerInfo);

export default playerRouter;
