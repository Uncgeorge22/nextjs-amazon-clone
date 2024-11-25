import { Tweets as TTweets } from "../api/tweets/Tweets";

export const TWEETS_TITLE_FIELD = "author";

export const TweetsTitle = (record: TTweets): string => {
  return record.author?.toString() || String(record.id);
};
