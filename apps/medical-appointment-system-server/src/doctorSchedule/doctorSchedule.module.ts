import { Module } from "@nestjs/common";
import { DoctorScheduleModuleBase } from "./base/doctorSchedule.module.base";
import { DoctorScheduleService } from "./doctorSchedule.service";
import { DoctorScheduleController } from "./doctorSchedule.controller";
import { DoctorScheduleResolver } from "./doctorSchedule.resolver";

@Module({
  imports: [DoctorScheduleModuleBase],
  controllers: [DoctorScheduleController],
  providers: [DoctorScheduleService, DoctorScheduleResolver],
  exports: [DoctorScheduleService],
})
export class DoctorScheduleModule {}
