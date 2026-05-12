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

router.patch("/toggle/:slug", blogController.toggleStatus);

export default router;
