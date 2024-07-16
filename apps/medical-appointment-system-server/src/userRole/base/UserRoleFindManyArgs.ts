/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserRoleWhereInput } from "./UserRoleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserRoleOrderByInput } from "./UserRoleOrderByInput";

@ArgsType()
class UserRoleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserRoleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserRoleWhereInput, { nullable: true })
  @Type(() => UserRoleWhereInput)
  where?: UserRoleWhereInput;

  @ApiProperty({
    required: false,
    type: [UserRoleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserRoleOrderByInput], { nullable: true })
  @Type(() => UserRoleOrderByInput)
  orderBy?: Array<UserRoleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserRoleFindManyArgs as UserRoleFindManyArgs };