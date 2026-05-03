import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import * as appointmentService from "./appointment.service";

export const createAppointment = catchAsync(async (req, res) => {
  const payload = req.body;

  const created = await appointmentService.createAppointment(payload);

  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    status: httpStatus[httpStatus.CREATED],
    message: "Appointment created!",
    data: created,
  });
});

export const getAppointments = catchAsync(async (req, res) => {
  const { page, limit, sortBy, sortOrder } = req.query;

  const result = await appointmentService.getAppointments({
    page: Number(page),
    limit: Number(limit),
    sortBy: sortBy as string,
    sortOrder: sortOrder as "asc" | "desc",
  });

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Appointments data.",
    data: result,
  });
});

export const updateAppointment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const result = await appointmentService.updateAppointment(
    id as string,
    payload,
  );

  if (!(result.modifiedCount > 0)) {
    throw new AppError(404, "Appointment not found!");
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Appointment updated.",
    data: result,
  });
});

export const deleteAppointment = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await appointmentService.deleteAppointment(
    id as string,
  );

  if (!(result.deletedCount > 0)) {
    throw new AppError(404, "Appointment not found!");
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Appointment deleted.",
    data: result,
  });
});