import { Router } from "express";
import { getAnalytics } from "../controllers/dashboard.controller";

//api/dashboard
const dashboardRouter = Router();
dashboardRouter.get("/", getAnalytics);

export default dashboardRouter;
