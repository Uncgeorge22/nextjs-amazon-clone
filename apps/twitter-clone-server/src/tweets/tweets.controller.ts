import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TweetsService } from "./tweets.service";
import { TweetsControllerBase } from "./base/tweets.controller.base";

@swagger.ApiTags("tweets")
@common.Controller("tweets")
export class TweetsController extends TweetsControllerBase {
  constructor(
    protected readonly service: TweetsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
