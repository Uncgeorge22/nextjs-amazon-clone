import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TweetsServiceBase } from "./base/tweets.service.base";

@Injectable()
export class TweetsService extends TweetsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
