import { StringFilter } from "../../util/StringFilter";
import { TweetsWhereUniqueInput } from "../tweets/TweetsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikesWhereInput = {
  id?: StringFilter;
  tweet?: TweetsWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
