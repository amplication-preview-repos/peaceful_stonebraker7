import { DoctorSchedule as TDoctorSchedule } from "../api/doctorSchedule/DoctorSchedule";

export const DOCTORSCHEDULE_TITLE_FIELD = "startTime";

export const DoctorScheduleTitle = (record: TDoctorSchedule): string => {
  return record.startTime?.toString() || String(record.id);
};
