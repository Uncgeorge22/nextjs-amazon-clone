import { TweetsWhereInput } from "./TweetsWhereInput";

export type TweetsListRelationFilter = {
  every?: TweetsWhereInput;
  some?: TweetsWhereInput;
  none?: TweetsWhereInput;
};
