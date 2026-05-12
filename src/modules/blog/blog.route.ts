import { Router } from "express";
import * as blogController from "./blog.controller";

const router = Router();

router
  .route("/")
  .get(blogController.getBlogs)
  .post(blogController.createBlog);

router
  .route("/:slug")
  .get(blogController.getSingleBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

export default router;
