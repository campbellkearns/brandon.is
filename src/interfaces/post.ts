import { type Author } from "./author";

export type Post = {
  category?: string;
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
