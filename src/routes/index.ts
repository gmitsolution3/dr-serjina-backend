import { Router } from "express";
import defaultController from "../modules/default/default.controller";
import profileRoute from "../modules/profile/profile.route";
import treatmentAndExpertiesRoute from "../modules/treatment-experties/treatment-experties.route";

const router = Router();

router.get("/", defaultController);
router.use("/profile", profileRoute);
router.use("/treatment-experties", treatmentAndExpertiesRoute);

export default router;
