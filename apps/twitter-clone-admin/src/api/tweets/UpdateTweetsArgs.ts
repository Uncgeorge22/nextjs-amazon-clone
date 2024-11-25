import { TweetsWhereUniqueInput } from "./TweetsWhereUniqueInput";
import { TweetsUpdateInput } from "./TweetsUpdateInput";

export type UpdateTweetsArgs = {
  where: TweetsWhereUniqueInput;
  data: TweetsUpdateInput;
};
