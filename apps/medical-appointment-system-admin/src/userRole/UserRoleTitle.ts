import { UserRole as TUserRole } from "../api/userRole/UserRole";

export const USERROLE_TITLE_FIELD = "userId";

export const UserRoleTitle = (record: TUserRole): string => {
  return record.userId?.toString() || String(record.id);
};
