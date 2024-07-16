import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
};
