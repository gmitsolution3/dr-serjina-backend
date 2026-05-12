import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AppError } from "./../../utils/AppError";
import * as blogService from "./blog.service";

export const createBlog = catchAsync(async (req, res) => {
  const payload = req.body;

  const { slug } = payload;

  const blogExist = await blogService.getSingleBlog(slug);

  if (blogExist) {
    throw new AppError(
      httpStatus.CONFLICT,
      "Blog with this title already exist!",
    );
  }

  const createdBlog = await blogService.createBlog(payload);

  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    status: httpStatus[httpStatus.CREATED],
    message: "Blog created!",
    data: createdBlog,
  });
});

export const getBlogs = catchAsync(async (req, res) => {
  const { page, limit, sortBy, sortOrder } = req.query;

  const result = await blogService.getBlogs({
    page: Number(page),
    limit: Number(limit),
    sortBy: sortBy as string,
    sortOrder: sortOrder as "asc" | "desc",
  });

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Blog data.",
    data: result,
  });
});

export const getSingleBlog = catchAsync(async (req, res) => {
  const { slug } = req.params;

  const result = await blogService.getSingleBlog(slug as string);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found!");
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Single Blog data.",
    data: result,
  });
});

export const updateBlog = catchAsync(async (req, res) => {
  const { slug } = req.params;
  const payload = req.body;

  const result = await blogService.updateBlog(slug as string, payload);

  if (!(result.modifiedCount > 0)) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found!");
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Blog updated.",
    data: result,
  });
});

export const deleteBlog = catchAsync(async (req, res) => {
  const { slug } = req.params;

  const result = await blogService.deleteBlog(slug as string);

  if (!(result.deletedCount > 0)) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found!");
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Blog deleted.",
    data: result,
  });
});
