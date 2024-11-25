/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Tweets as PrismaTweets,
  Likes as PrismaLikes,
} from "@prisma/client";

export class TweetsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TweetsCountArgs, "select">): Promise<number> {
    return this.prisma.tweets.count(args);
  }

  async tweetsItems(args: Prisma.TweetsFindManyArgs): Promise<PrismaTweets[]> {
    return this.prisma.tweets.findMany(args);
  }
  async tweets(
    args: Prisma.TweetsFindUniqueArgs
  ): Promise<PrismaTweets | null> {
    return this.prisma.tweets.findUnique(args);
  }
  async createTweets(args: Prisma.TweetsCreateArgs): Promise<PrismaTweets> {
    return this.prisma.tweets.create(args);
  }
  async updateTweets(args: Prisma.TweetsUpdateArgs): Promise<PrismaTweets> {
    return this.prisma.tweets.update(args);
  }
  async deleteTweets(args: Prisma.TweetsDeleteArgs): Promise<PrismaTweets> {
    return this.prisma.tweets.delete(args);
  }

  async findLikesItems(
    parentId: string,
    args: Prisma.LikesFindManyArgs
  ): Promise<PrismaLikes[]> {
    return this.prisma.tweets
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .likesItems(args);
  }
}
