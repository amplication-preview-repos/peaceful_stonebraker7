import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "appointmentTime";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.appointmentTime?.toString() || String(record.id);
};
