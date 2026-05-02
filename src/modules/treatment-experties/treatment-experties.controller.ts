import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import * as treatmentAndExpertiesService from "./treatment-experties.service";

export const createTreatmentAndExperties = catchAsync(
  async (req, res) => {
    const payload = req.body;

    const createdExperties =
      await treatmentAndExpertiesService.createTreatmentAndExperties(
        payload,
      );

    return sendResponse(res, {
      statusCode: httpStatus.CREATED,
      status: httpStatus[httpStatus.CREATED],
      message: "Treatment experties created!",
      data: createdExperties,
    });
  },
);

export const getTreatmentAndExperties = catchAsync(
  async (_req, res) => {
    const result =
      await treatmentAndExpertiesService.getTreatmentAndExperties();

    return sendResponse(res, {
      statusCode: httpStatus.OK,
      status: httpStatus[httpStatus.OK],
      message: "Treatment experties data.",
      data: result,
    });
  },
);

export const updateTreatmentAndExperties = catchAsync(
  async (req, res) => {
    const payload = req.body;
    const { id } = req.params;

    const result =
      await treatmentAndExpertiesService.updateTreatmentAndExperties(
        id as string,
        payload,
      );

    if (!(result.modifiedCount > 0)) {
      throw new AppError(404, "Treatment not found!");
    }

    return sendResponse(res, {
      statusCode: httpStatus.OK,
      status: httpStatus[httpStatus.OK],
      message: "Treatment experties updated.",
      data: result,
    });
  },
);

export const deleteTreatmentAndExperties = catchAsync(
  async (req, res) => {
    const { id } = req.params;

    const result =
      await treatmentAndExpertiesService.deleteTreatmentAndExperties(
        id as string,
      );

    if (!(result.deletedCount > 0)) {
      throw new AppError(404, "Treatment not found!");
    }

    return sendResponse(res, {
      statusCode: httpStatus.OK,
      status: httpStatus[httpStatus.OK],
      message: "Treatment experties deleted.",
      data: result,
    });
  },
);
