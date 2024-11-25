import { FollowersWhereUniqueInput } from "./FollowersWhereUniqueInput";
import { FollowersCreateNestedManyWithoutFollowersItemsInput } from "./FollowersCreateNestedManyWithoutFollowersItemsInput";

export type FollowersCreateInput = {
  follower?: FollowersWhereUniqueInput | null;
  followersItems?: FollowersCreateNestedManyWithoutFollowersItemsInput;
  following?: string | null;
};
