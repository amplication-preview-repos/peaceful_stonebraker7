import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";

export type DoctorScheduleCreateInput = {
  dayOfWeek?: "Option1" | null;
  startTime?: string | null;
  endTime?: string | null;
  doctor?: DoctorWhereUniqueInput | null;
};
