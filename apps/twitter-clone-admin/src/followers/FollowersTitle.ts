import { Followers as TFollowers } from "../api/followers/Followers";

export const FOLLOWERS_TITLE_FIELD = "following";

export const FollowersTitle = (record: TFollowers): string => {
  return record.following?.toString() || String(record.id);
};
