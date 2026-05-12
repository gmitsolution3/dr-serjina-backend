export interface IBlog {
  title: string;
  slug: string;
  thumbnail: string;
  content: unknown;
  status: "draft" | "published";
  publishedAt?: Date;
}
