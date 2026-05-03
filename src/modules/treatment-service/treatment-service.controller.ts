import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import * as treatmentService from "./treatment-service.service";

export const createTreatmentService = catchAsync(async (req, res) => {
  const payload = req.body;

  const created =
    await treatmentService.createTreatmentService(payload);

  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    status: httpStatus[httpStatus.CREATED],
    message: "Service created!",
    data: created,
  });
});

export const getTreatmentServices = catchAsync(async (_req, res) => {
  const result = await treatmentService.getTreatmentServices();

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Services data.",
    data: result,
  });
});

export const updateTreatmentService = catchAsync(async (req, res) => {
  const payload = req.body;
  const { id } = req.params;

  const result = await treatmentService.updateTreatmentService(
    id as string,
    payload,
  );

  if (!(result.modifiedCount > 0)) {
    throw new AppError(404, "Treatment service not found!");
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Service updated.",
    data: result,
  });
});

export const deleteTreatmentService = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await treatmentService.deleteTreatmentService(
    id as string,
  );

  if (!(result.deletedCount > 0)) {
    throw new AppError(404, "Service not found!");
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Service deleted.",
    data: result,
  });
});