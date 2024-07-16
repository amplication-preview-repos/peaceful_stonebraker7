import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentCreateInput = {
  appointmentDate?: Date | null;
  appointmentTime?: string | null;
  status?: "Option1" | null;
  patient?: PatientWhereUniqueInput | null;
};
