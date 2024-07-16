import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DoctorScheduleService } from "./doctorSchedule.service";
import { DoctorScheduleControllerBase } from "./base/doctorSchedule.controller.base";

@swagger.ApiTags("doctorSchedules")
@common.Controller("doctorSchedules")
export class DoctorScheduleController extends DoctorScheduleControllerBase {
  constructor(protected readonly service: DoctorScheduleService) {
    super(service);
  }
}
