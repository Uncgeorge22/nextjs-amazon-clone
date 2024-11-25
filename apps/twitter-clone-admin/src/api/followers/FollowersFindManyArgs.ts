import { FollowersWhereInput } from "./FollowersWhereInput";
import { FollowersOrderByInput } from "./FollowersOrderByInput";

export type FollowersFindManyArgs = {
  where?: FollowersWhereInput;
  orderBy?: Array<FollowersOrderByInput>;
  skip?: number;
  take?: number;
};
