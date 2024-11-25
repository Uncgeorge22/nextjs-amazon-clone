import { LikesUpdateManyWithoutTweetsItemsInput } from "./LikesUpdateManyWithoutTweetsItemsInput";

export type TweetsUpdateInput = {
  author?: string | null;
  content?: string | null;
  likesItems?: LikesUpdateManyWithoutTweetsItemsInput;
  mediaUrl?: string | null;
};
