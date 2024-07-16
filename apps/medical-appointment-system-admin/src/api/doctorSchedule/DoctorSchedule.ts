import { Doctor } from "../doctor/Doctor";

export type DoctorSchedule = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dayOfWeek?: "Option1" | null;
  startTime: string | null;
  endTime: string | null;
  doctor?: Doctor | null;
};
