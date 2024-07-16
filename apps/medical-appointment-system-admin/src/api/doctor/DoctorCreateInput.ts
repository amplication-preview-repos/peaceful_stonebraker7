import { DoctorScheduleCreateNestedManyWithoutDoctorsInput } from "./DoctorScheduleCreateNestedManyWithoutDoctorsInput";

export type DoctorCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  specialization?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  doctorSchedules?: DoctorScheduleCreateNestedManyWithoutDoctorsInput;
};
