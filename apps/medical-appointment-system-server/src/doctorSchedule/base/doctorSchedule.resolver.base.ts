/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DoctorSchedule } from "./DoctorSchedule";
import { DoctorScheduleCountArgs } from "./DoctorScheduleCountArgs";
import { DoctorScheduleFindManyArgs } from "./DoctorScheduleFindManyArgs";
import { DoctorScheduleFindUniqueArgs } from "./DoctorScheduleFindUniqueArgs";
import { CreateDoctorScheduleArgs } from "./CreateDoctorScheduleArgs";
import { UpdateDoctorScheduleArgs } from "./UpdateDoctorScheduleArgs";
import { DeleteDoctorScheduleArgs } from "./DeleteDoctorScheduleArgs";
import { Doctor } from "../../doctor/base/Doctor";
import { DoctorScheduleService } from "../doctorSchedule.service";
@graphql.Resolver(() => DoctorSchedule)
export class DoctorScheduleResolverBase {
  constructor(protected readonly service: DoctorScheduleService) {}

  async _doctorSchedulesMeta(
    @graphql.Args() args: DoctorScheduleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DoctorSchedule])
  async doctorSchedules(
    @graphql.Args() args: DoctorScheduleFindManyArgs
  ): Promise<DoctorSchedule[]> {
    return this.service.doctorSchedules(args);
  }

  @graphql.Query(() => DoctorSchedule, { nullable: true })
  async doctorSchedule(
    @graphql.Args() args: DoctorScheduleFindUniqueArgs
  ): Promise<DoctorSchedule | null> {
    const result = await this.service.doctorSchedule(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DoctorSchedule)
  async createDoctorSchedule(
    @graphql.Args() args: CreateDoctorScheduleArgs
  ): Promise<DoctorSchedule> {
    return await this.service.createDoctorSchedule({
      ...args,
      data: {
        ...args.data,

        doctor: args.data.doctor
          ? {
              connect: args.data.doctor,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => DoctorSchedule)
  async updateDoctorSchedule(
    @graphql.Args() args: UpdateDoctorScheduleArgs
  ): Promise<DoctorSchedule | null> {
    try {
      return await this.service.updateDoctorSchedule({
        ...args,
        data: {
          ...args.data,

          doctor: args.data.doctor
            ? {
                connect: args.data.doctor,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DoctorSchedule)
  async deleteDoctorSchedule(
    @graphql.Args() args: DeleteDoctorScheduleArgs
  ): Promise<DoctorSchedule | null> {
    try {
      return await this.service.deleteDoctorSchedule(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Doctor, {
    nullable: true,
    name: "doctor",
  })
  async getDoctor(
    @graphql.Parent() parent: DoctorSchedule
  ): Promise<Doctor | null> {
    const result = await this.service.getDoctor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
