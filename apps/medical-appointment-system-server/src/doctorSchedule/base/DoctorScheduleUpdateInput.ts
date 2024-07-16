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
import { EnumDoctorScheduleDayOfWeek } from "./EnumDoctorScheduleDayOfWeek";
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { DoctorWhereUniqueInput } from "../../doctor/base/DoctorWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class DoctorScheduleUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumDoctorScheduleDayOfWeek,
  })
  @IsEnum(EnumDoctorScheduleDayOfWeek)
  @IsOptional()
  @Field(() => EnumDoctorScheduleDayOfWeek, {
    nullable: true,
  })
  dayOfWeek?: "Option1" | null;

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
  startTime?: string | null;

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
  endTime?: string | null;

  @ApiProperty({
    required: false,
    type: () => DoctorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DoctorWhereUniqueInput)
  @IsOptional()
  @Field(() => DoctorWhereUniqueInput, {
    nullable: true,
  })
  doctor?: DoctorWhereUniqueInput | null;
}

export { DoctorScheduleUpdateInput as DoctorScheduleUpdateInput };
