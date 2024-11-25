/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TweetsService } from "../tweets.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TweetsCreateInput } from "./TweetsCreateInput";
import { Tweets } from "./Tweets";
import { TweetsFindManyArgs } from "./TweetsFindManyArgs";
import { TweetsWhereUniqueInput } from "./TweetsWhereUniqueInput";
import { TweetsUpdateInput } from "./TweetsUpdateInput";
import { LikesFindManyArgs } from "../../likes/base/LikesFindManyArgs";
import { Likes } from "../../likes/base/Likes";
import { LikesWhereUniqueInput } from "../../likes/base/LikesWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TweetsControllerBase {
  constructor(
    protected readonly service: TweetsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tweets })
  @nestAccessControl.UseRoles({
    resource: "Tweets",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TweetsCreateInput,
  })
  async createTweets(@common.Body() data: TweetsCreateInput): Promise<Tweets> {
    return await this.service.createTweets({
      data: data,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        mediaUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Tweets] })
  @ApiNestedQuery(TweetsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Tweets",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tweetsItems(@common.Req() request: Request): Promise<Tweets[]> {
    const args = plainToClass(TweetsFindManyArgs, request.query);
    return this.service.tweetsItems({
      ...args,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        mediaUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tweets })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tweets",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tweets(
    @common.Param() params: TweetsWhereUniqueInput
  ): Promise<Tweets | null> {
    const result = await this.service.tweets({
      where: params,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        mediaUrl: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tweets })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tweets",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TweetsUpdateInput,
  })
  async updateTweets(
    @common.Param() params: TweetsWhereUniqueInput,
    @common.Body() data: TweetsUpdateInput
  ): Promise<Tweets | null> {
    try {
      return await this.service.updateTweets({
        where: params,
        data: data,
        select: {
          author: true,
          content: true,
          createdAt: true,
          id: true,
          mediaUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tweets })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tweets",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTweets(
    @common.Param() params: TweetsWhereUniqueInput
  ): Promise<Tweets | null> {
    try {
      return await this.service.deleteTweets({
        where: params,
        select: {
          author: true,
          content: true,
          createdAt: true,
          id: true,
          mediaUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/likesItems")
  @ApiNestedQuery(LikesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Likes",
    action: "read",
    possession: "any",
  })
  async findLikesItems(
    @common.Req() request: Request,
    @common.Param() params: TweetsWhereUniqueInput
  ): Promise<Likes[]> {
    const query = plainToClass(LikesFindManyArgs, request.query);
    const results = await this.service.findLikesItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        tweet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/likesItems")
  @nestAccessControl.UseRoles({
    resource: "Tweets",
    action: "update",
    possession: "any",
  })
  async connectLikesItems(
    @common.Param() params: TweetsWhereUniqueInput,
    @common.Body() body: LikesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likesItems: {
        connect: body,
      },
    };
    await this.service.updateTweets({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/likesItems")
  @nestAccessControl.UseRoles({
    resource: "Tweets",
    action: "update",
    possession: "any",
  })
  async updateLikesItems(
    @common.Param() params: TweetsWhereUniqueInput,
    @common.Body() body: LikesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likesItems: {
        set: body,
      },
    };
    await this.service.updateTweets({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/likesItems")
  @nestAccessControl.UseRoles({
    resource: "Tweets",
    action: "update",
    possession: "any",
  })
  async disconnectLikesItems(
    @common.Param() params: TweetsWhereUniqueInput,
    @common.Body() body: LikesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likesItems: {
        disconnect: body,
      },
    };
    await this.service.updateTweets({
      where: params,
      data,
      select: { id: true },
    });
  }
}
