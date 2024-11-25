import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FollowersServiceBase } from "./base/followers.service.base";

@Injectable()
export class FollowersService extends FollowersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
