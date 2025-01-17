/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FollowersWhereUniqueInput } from "./FollowersWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FollowersUpdateManyWithoutFollowersItemsInput {
  @Field(() => [FollowersWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FollowersWhereUniqueInput],
  })
  connect?: Array<FollowersWhereUniqueInput>;

  @Field(() => [FollowersWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FollowersWhereUniqueInput],
  })
  disconnect?: Array<FollowersWhereUniqueInput>;

  @Field(() => [FollowersWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FollowersWhereUniqueInput],
  })
  set?: Array<FollowersWhereUniqueInput>;
}

export { FollowersUpdateManyWithoutFollowersItemsInput as FollowersUpdateManyWithoutFollowersItemsInput };
