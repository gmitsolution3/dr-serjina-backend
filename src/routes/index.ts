import { Router } from "express";
import appointmentRoute from "../modules/appointment/appointment.route";
import defaultController from "../modules/default/default.controller";
import profileRoute from "../modules/profile/profile.route";
import treatmentAndExpertiesRoute from "../modules/treatment-experties/treatment-experties.route";
import treatmentAndServiceRoute from "../modules/treatment-service/treatment-service.route";
import dashboardAnalyticsRoute from "../modules/analytics/analytics.route";
import blogRoute from "../modules/blog/blog.route";

const router = Router();

router.get("/", defaultController);
router.use("/profile", profileRoute);
router.use("/treatment-experties", treatmentAndExpertiesRoute);
router.use("/treatment-service", treatmentAndServiceRoute);
router.use("/appointment", appointmentRoute);
router.use("/dashboard-analytics", dashboardAnalyticsRoute);
router.use("/blog", blogRoute);

export default router;
