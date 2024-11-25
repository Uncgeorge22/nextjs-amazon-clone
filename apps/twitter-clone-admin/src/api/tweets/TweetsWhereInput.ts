import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikesListRelationFilter } from "../likes/LikesListRelationFilter";

export type TweetsWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  likesItems?: LikesListRelationFilter;
  mediaUrl?: StringNullableFilter;
};
