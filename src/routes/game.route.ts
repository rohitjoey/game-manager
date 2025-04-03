import { Router } from "express";
import { saveGame } from "../controllers/game.controller";

//api/game
const gameRouter = Router();
/**
 * @swagger
 * /api/game:
 *   post:
 *     summary: Save a new game
 *     tags: [Games]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - player1Id
 *               - player2Id
 *               - score1
 *               - score2
 *             properties:
 *               player1Id:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the first player (must exist in the players table)
 *               player2Id:
 *                 type: string
 *                 format: uuid
 *                 example: "550e8400-e29b-41d4-a716-446655440000"
 *                 description: ID of the second player (must exist in the players table
 *               score1:
 *                 type: integer
 *                 description: Score of the first player
 *               score2:
 *                 type: integer
 *                 description: Score of the second player
 *     responses:
 *       200:
 *         description: Game finished successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid input, missing required 
 *       500:
 *         description: No players found or same player on both side
 */
gameRouter.post("/", saveGame);

export default gameRouter;
