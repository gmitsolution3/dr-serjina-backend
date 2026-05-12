import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    content: {
      type: Schema.Types.Mixed,
      required: true,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    publishedAt: {
      type: Date,
    },
  },
  {
    strict: true,
    timestamps: true,
    versionKey: false,
  },
);

const Blog = model<IBlog>("Blog", blogSchema);

export default Blog;
