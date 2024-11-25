import { TweetsWhereInput } from "./TweetsWhereInput";
import { TweetsOrderByInput } from "./TweetsOrderByInput";

export type TweetsFindManyArgs = {
  where?: TweetsWhereInput;
  orderBy?: Array<TweetsOrderByInput>;
  skip?: number;
  take?: number;
};
