import { Likes } from "../likes/Likes";

export type Tweets = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  likesItems?: Array<Likes>;
  mediaUrl: string | null;
  updatedAt: Date;
};
