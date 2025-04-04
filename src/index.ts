import express from "express";
import cors from "cors";
import config from "./config/config";
import status from "http-status";
import { errorHandler } from "./middlewares/errorHandler";
import playerRouter from "./routes/player.route";
import gameRouter from "./routes/game.route";
import dashboardRouter from "./routes/dashboard.route";
import swaggerUi from "swagger-ui-express";
import { openapiSpecification } from "./lib/docs";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(status.OK).json({ message: "Welcome to my football manager" });
});

app.use("/api/players", playerRouter);
app.use("/api/game", gameRouter);
app.use("/api/dashboard", dashboardRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

export default app;
