import { Router } from 'express';
import * as analyticController from "./analytics.controller";

const router = Router();

router.get("/", analyticController.getDashboardAnalytics);


export default router;
