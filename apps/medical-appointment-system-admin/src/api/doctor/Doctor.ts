import { DoctorSchedule } from "../doctorSchedule/DoctorSchedule";

export type Doctor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  specialization: string | null;
  email: string | null;
  phoneNumber: string | null;
  doctorSchedules?: Array<DoctorSchedule>;
};
