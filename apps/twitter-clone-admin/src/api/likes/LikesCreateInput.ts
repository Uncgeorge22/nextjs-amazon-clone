import { TweetsWhereUniqueInput } from "../tweets/TweetsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikesCreateInput = {
  tweet?: TweetsWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
