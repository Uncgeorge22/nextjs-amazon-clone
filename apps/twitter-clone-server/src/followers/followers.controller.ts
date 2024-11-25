import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FollowersService } from "./followers.service";
import { FollowersControllerBase } from "./base/followers.controller.base";

@swagger.ApiTags("followers")
@common.Controller("followers")
export class FollowersController extends FollowersControllerBase {
  constructor(
    protected readonly service: FollowersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
