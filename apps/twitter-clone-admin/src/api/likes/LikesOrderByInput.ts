import { SortOrder } from "../../util/SortOrder";

export type LikesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tweetId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
