import { Router } from "express";
import * as appointmentController from "./appointment.controller";

const router = Router();

router
  .route("/")
  .get(appointmentController.getAppointments)
  .post(appointmentController.createAppointment);

router
  .route("/:id")
  .patch(appointmentController.updateAppointment)
  .delete(appointmentController.deleteAppointment);

export default router;