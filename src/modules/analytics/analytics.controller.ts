import * as analyticsService from "./analytics.service"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status"

export const getDashboardAnalytics = catchAsync(async (req, res) => {
  const analyticsResult = await analyticsService.getDashboardAnalytics();

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Admin Dashboard Analytics report",
    data: analyticsResult,
  });
}) 