import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FollowersModuleBase } from "./base/followers.module.base";
import { FollowersService } from "./followers.service";
import { FollowersController } from "./followers.controller";
import { FollowersResolver } from "./followers.resolver";

@Module({
  imports: [FollowersModuleBase, forwardRef(() => AuthModule)],
  controllers: [FollowersController],
  providers: [FollowersService, FollowersResolver],
  exports: [FollowersService],
})
export class FollowersModule {}
