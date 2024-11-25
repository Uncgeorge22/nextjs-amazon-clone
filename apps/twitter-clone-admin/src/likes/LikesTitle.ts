import { Likes as TLikes } from "../api/likes/Likes";

export const LIKES_TITLE_FIELD = "id";

export const LikesTitle = (record: TLikes): string => {
  return record.id?.toString() || String(record.id);
};
