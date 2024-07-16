import { DoctorScheduleUpdateManyWithoutDoctorsInput } from "./DoctorScheduleUpdateManyWithoutDoctorsInput";

export type DoctorUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  specialization?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  doctorSchedules?: DoctorScheduleUpdateManyWithoutDoctorsInput;
};
