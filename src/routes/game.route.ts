import { Router } from "express";
import { saveGame } from "../controllers/game.controller";

//api/game
const gameRouter = Router();
gameRouter.post("/", saveGame);

export default gameRouter;
