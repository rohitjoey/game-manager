import { Router } from "express";
import { addPlayer, getAllPlayers } from "../controllers/player.controller";

//api/players
const playerRouter = Router();
/**
 * @swagger
 * /api/players:
 *   get:
 *     summary: Get all players
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: A list of players
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                   name:
 *                     type: string
 *                   gamesPlayed:
 *                     type: integer
 *                   gamesWon:
 *                     type: integer
 *                   gamesLost:
 *                     type: integer
 *                   goalsScored:
 *                     type: integer
 *                   goalsConceeded:
 *                     type: integer
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */

playerRouter.get("/", getAllPlayers);
playerRouter.post("/", addPlayer);

export default playerRouter;
