import { IPaginationOptions } from "../../types";
import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

export const createBlog = async (payload: IBlog) => {
  const result = await Blog.create(payload);

  return result;
};

export const getBlogs = async (options: IPaginationOptions) => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 10;
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder === "asc" ? 1 : -1;

  const sortCondition: Record<string, 1 | -1> = {
    [sortBy]: sortOrder,
  };

  const blogList = await Blog.find({ status: "published" })
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await Blog.countDocuments({ status: "published" });

  const totalPage = limit === 0 ? 1 : Math.ceil(total / limit);

  return {
    meta: {
      page,
      limit,
      total,
      totalPage,
    },
    blogList,
  };
};

export const getSingleBlog = async (slug: string) => {
  const blog = await Blog.findOne({ slug });

  return blog;
};

export const updateBlog = async (
  slug: string,
  payload: Partial<IBlog>,
) => {
  const result = await Blog.updateOne({ slug }, { $set: payload });

  return result;
};

export const toggleStatus = async (slug: string) => {
  const blog = await Blog.findOne({ slug });

  const updatedStatus =
    blog!.status === "published" ? "draft" : "published";

  blog!.status = updatedStatus;

  const result = await blog!.save();

  return result;
};

export const deleteBlog = async (slug: string) => {
  const result = await Blog.deleteOne({ slug });
  return result;
};
