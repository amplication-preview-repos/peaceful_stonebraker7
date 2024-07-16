import { Patient } from "../patient/Patient";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  appointmentDate: Date | null;
  appointmentTime: string | null;
  status?: "Option1" | null;
  patient?: Patient | null;
};
