import { SortOrder } from "../../util/SortOrder";

export type TweetsOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mediaUrl?: SortOrder;
  updatedAt?: SortOrder;
};
