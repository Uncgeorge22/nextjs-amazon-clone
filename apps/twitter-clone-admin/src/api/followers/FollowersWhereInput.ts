import { FollowersWhereUniqueInput } from "./FollowersWhereUniqueInput";
import { FollowersListRelationFilter } from "./FollowersListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowersWhereInput = {
  follower?: FollowersWhereUniqueInput;
  followersItems?: FollowersListRelationFilter;
  following?: StringNullableFilter;
  id?: StringFilter;
};
