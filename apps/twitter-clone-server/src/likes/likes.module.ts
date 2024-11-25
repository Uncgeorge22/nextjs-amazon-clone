import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LikesModuleBase } from "./base/likes.module.base";
import { LikesService } from "./likes.service";
import { LikesController } from "./likes.controller";
import { LikesResolver } from "./likes.resolver";

@Module({
  imports: [LikesModuleBase, forwardRef(() => AuthModule)],
  controllers: [LikesController],
  providers: [LikesService, LikesResolver],
  exports: [LikesService],
})
export class LikesModule {}
