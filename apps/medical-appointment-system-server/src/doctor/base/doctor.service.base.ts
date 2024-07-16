/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Doctor as PrismaDoctor,
  DoctorSchedule as PrismaDoctorSchedule,
} from "@prisma/client";

export class DoctorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DoctorCountArgs, "select">): Promise<number> {
    return this.prisma.doctor.count(args);
  }

  async doctors(args: Prisma.DoctorFindManyArgs): Promise<PrismaDoctor[]> {
    return this.prisma.doctor.findMany(args);
  }
  async doctor(
    args: Prisma.DoctorFindUniqueArgs
  ): Promise<PrismaDoctor | null> {
    return this.prisma.doctor.findUnique(args);
  }
  async createDoctor(args: Prisma.DoctorCreateArgs): Promise<PrismaDoctor> {
    return this.prisma.doctor.create(args);
  }
  async updateDoctor(args: Prisma.DoctorUpdateArgs): Promise<PrismaDoctor> {
    return this.prisma.doctor.update(args);
  }
  async deleteDoctor(args: Prisma.DoctorDeleteArgs): Promise<PrismaDoctor> {
    return this.prisma.doctor.delete(args);
  }

  async findDoctorSchedules(
    parentId: string,
    args: Prisma.DoctorScheduleFindManyArgs
  ): Promise<PrismaDoctorSchedule[]> {
    return this.prisma.doctor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .doctorSchedules(args);
  }
}
