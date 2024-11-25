import { TweetsWhereUniqueInput } from "../tweets/TweetsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikesUpdateInput = {
  tweet?: TweetsWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
