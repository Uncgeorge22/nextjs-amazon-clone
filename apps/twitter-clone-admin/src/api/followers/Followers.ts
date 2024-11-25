export type Followers = {
  createdAt: Date;
  follower?: Followers | null;
  followersItems?: Array<Followers>;
  following: string | null;
  id: string;
  updatedAt: Date;
};
