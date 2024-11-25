import { FollowersWhereUniqueInput } from "./FollowersWhereUniqueInput";
import { FollowersUpdateManyWithoutFollowersItemsInput } from "./FollowersUpdateManyWithoutFollowersItemsInput";

export type FollowersUpdateInput = {
  follower?: FollowersWhereUniqueInput | null;
  followersItems?: FollowersUpdateManyWithoutFollowersItemsInput;
  following?: string | null;
};
