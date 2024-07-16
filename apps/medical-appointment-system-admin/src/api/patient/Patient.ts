import { Appointment } from "../appointment/Appointment";

export type Patient = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  phoneNumber: string | null;
  firstName: string | null;
  lastName: string | null;
  appointments?: Array<Appointment>;
};
