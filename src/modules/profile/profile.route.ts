import { Router } from "express";
import * as profileController from "./profile.controller";

const router = Router();

router
  .route("/")
  .get(profileController.getProfileDetail)
  .patch(profileController.updateOrCreateProfile);

export default router;
