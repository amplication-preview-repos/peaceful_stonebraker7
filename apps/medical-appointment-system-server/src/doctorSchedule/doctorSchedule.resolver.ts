import * as graphql from "@nestjs/graphql";
import { DoctorScheduleResolverBase } from "./base/doctorSchedule.resolver.base";
import { DoctorSchedule } from "./base/DoctorSchedule";
import { DoctorScheduleService } from "./doctorSchedule.service";

@graphql.Resolver(() => DoctorSchedule)
export class DoctorScheduleResolver extends DoctorScheduleResolverBase {
  constructor(protected readonly service: DoctorScheduleService) {
    super(service);
  }
}
