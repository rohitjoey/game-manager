import { Router } from "express";
import { getAnalytics } from "../controllers/dashboard.controller";

//api/dashboard
const dashboardRouter = Router();

/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get analytics data
 *     description: Retrieves the analytics data for all players.
 *     responses:
 *       200:
 *         description: Successfully retrieved analytics data
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
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                   name:
 *                     type: string
 *                     example: "Player1"
 *                   gamesPlayed:
 *                     type: integer
 *                     example: 12
 *                   gamesWon:
 *                     type: integer
 *                     example: 4
 *                   gamesLost:
 *                     type: integer
 *                     example: 8
 *                   goalsScored:
 *                     type: integer
 *                     example: 12
 *                   goalsConceeded:
 *                     type: integer
 *                     example: 48
 *                   ratio:
 *                     type: number
 *                     format: float
 *                     example: 0.33
 *                   gd:
 *                     type: integer
 *                     example: -36
 *       500:
 *         description: Internal server error
 */
dashboardRouter.get("/", getAnalytics);

export default dashboardRouter;
