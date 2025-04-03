import { Router } from "express";
import { addPlayer, getAllPlayers } from "../controllers/player.controller";

//api/players
const playerRouter = Router();
playerRouter.get("/", getAllPlayers);
playerRouter.post("/", addPlayer);

export default playerRouter;
