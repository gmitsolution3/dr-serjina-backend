import { Router } from "express";
import defaultController from "../modules/default/default.controller";
import profileRoute from "../modules/profile/profile.route";

const router = Router();

router.get("/", defaultController);
router.use("/profile", profileRoute);

export default router;
