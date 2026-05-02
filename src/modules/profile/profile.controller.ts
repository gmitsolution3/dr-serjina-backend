import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { AppError } from "./../../utils/AppError";
import { sendResponse } from "./../../utils/sendResponse";
import * as profileService from "./profile.service";

export const updateOrCreateProfile = catchAsync(async (req, res) => {
  const payload = req.body;

  const updatedProfile =
    await profileService.updateOrCreateProfile(payload);

  console.log(updatedProfile);

  if (updatedProfile.upsertedCount > 0) {
    return sendResponse(res, {
      statusCode: httpStatus.CREATED,
      status: httpStatus[httpStatus.CREATED],
      message: "Profile has been created.",
    });
  }

  if (updatedProfile.modifiedCount > 0) {
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      status: httpStatus[httpStatus.OK],
      message: "Profile has been updated.",
    });
  }
});

export const getProfileDetail = catchAsync(async (req, res) => {
  const profileDetail = await profileService.getProfileDetail();

  if (!profileDetail) {
    throw new AppError(404, "Profile not found!");
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Profile Detail.",
    data: profileDetail,
  });
});
