import { DoctorScheduleWhereInput } from "./DoctorScheduleWhereInput";
import { DoctorScheduleOrderByInput } from "./DoctorScheduleOrderByInput";

export type DoctorScheduleFindManyArgs = {
  where?: DoctorScheduleWhereInput;
  orderBy?: Array<DoctorScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
