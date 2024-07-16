import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorScheduleListRelationFilter } from "../doctorSchedule/DoctorScheduleListRelationFilter";

export type DoctorWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  specialization?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  doctorSchedules?: DoctorScheduleListRelationFilter;
};
