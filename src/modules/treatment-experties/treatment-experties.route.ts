import { Router } from "express";
import * as treatementController from "./treatment-experties.controller";

const router = Router();

router
  .route("/")
  .get(treatementController.getTreatmentAndExperties)
  .post(treatementController.createTreatmentAndExperties);

router
  .route("/:id")
  .patch(treatementController.updateTreatmentAndExperties)
  .delete(treatementController.deleteTreatmentAndExperties);

export default router;
