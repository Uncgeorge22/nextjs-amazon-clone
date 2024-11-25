/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FollowersWhereUniqueInput } from "./FollowersWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { FollowersCreateNestedManyWithoutFollowersItemsInput } from "./FollowersCreateNestedManyWithoutFollowersItemsInput";

@InputType()
class FollowersCreateInput {
  @ApiProperty({
    required: false,
    type: () => FollowersWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FollowersWhereUniqueInput)
  @IsOptional()
  @Field(() => FollowersWhereUniqueInput, {
    nullable: true,
  })
  follower?: FollowersWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FollowersCreateNestedManyWithoutFollowersItemsInput,
  })
  @ValidateNested()
  @Type(() => FollowersCreateNestedManyWithoutFollowersItemsInput)
  @IsOptional()
  @Field(() => FollowersCreateNestedManyWithoutFollowersItemsInput, {
    nullable: true,
  })
  followersItems?: FollowersCreateNestedManyWithoutFollowersItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  following?: string | null;
}

export { FollowersCreateInput as FollowersCreateInput };
