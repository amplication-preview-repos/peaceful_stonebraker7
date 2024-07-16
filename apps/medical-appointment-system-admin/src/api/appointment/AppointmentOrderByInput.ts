import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  appointmentDate?: SortOrder;
  appointmentTime?: SortOrder;
  status?: SortOrder;
  patientId?: SortOrder;
};
