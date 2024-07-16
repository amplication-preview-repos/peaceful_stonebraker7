import { SortOrder } from "../../util/SortOrder";

export type DoctorScheduleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dayOfWeek?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  doctorId?: SortOrder;
};
