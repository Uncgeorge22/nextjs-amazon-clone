import { LikesCreateNestedManyWithoutTweetsItemsInput } from "./LikesCreateNestedManyWithoutTweetsItemsInput";

export type TweetsCreateInput = {
  author?: string | null;
  content?: string | null;
  likesItems?: LikesCreateNestedManyWithoutTweetsItemsInput;
  mediaUrl?: string | null;
};
