import { Tweets } from "../tweets/Tweets";
import { User } from "../user/User";

export type Likes = {
  createdAt: Date;
  id: string;
  tweet?: Tweets | null;
  updatedAt: Date;
  user?: User | null;
};
