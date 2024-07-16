import { SortOrder } from "../../util/SortOrder";

export type UserRoleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  role?: SortOrder;
  userId?: SortOrder;
};
