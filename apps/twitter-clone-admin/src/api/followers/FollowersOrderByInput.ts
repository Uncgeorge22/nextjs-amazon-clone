import { SortOrder } from "../../util/SortOrder";

export type FollowersOrderByInput = {
  createdAt?: SortOrder;
  followerId?: SortOrder;
  following?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
