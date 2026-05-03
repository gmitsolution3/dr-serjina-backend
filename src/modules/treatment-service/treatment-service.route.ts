import { Router } from "express";
import * as serviceController from "./treatment-service.controller";

const router = Router();

router
  .route("/")
  .get(serviceController.getTreatmentServices)
  .post(serviceController.createTreatmentService);

router
  .route("/:id")
  .patch(serviceController.updateTreatmentService)
  .delete(serviceController.deleteTreatmentService);

export default router;
