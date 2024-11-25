import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TweetsModuleBase } from "./base/tweets.module.base";
import { TweetsService } from "./tweets.service";
import { TweetsController } from "./tweets.controller";
import { TweetsResolver } from "./tweets.resolver";

@Module({
  imports: [TweetsModuleBase, forwardRef(() => AuthModule)],
  controllers: [TweetsController],
  providers: [TweetsService, TweetsResolver],
  exports: [TweetsService],
})
export class TweetsModule {}
