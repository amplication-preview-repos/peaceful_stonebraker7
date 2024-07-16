import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DoctorScheduleServiceBase } from "./base/doctorSchedule.service.base";

@Injectable()
export class DoctorScheduleService extends DoctorScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
