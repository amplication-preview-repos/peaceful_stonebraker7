import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";

export type DoctorScheduleWhereInput = {
  id?: StringFilter;
  dayOfWeek?: "Option1";
  startTime?: StringNullableFilter;
  endTime?: StringNullableFilter;
  doctor?: DoctorWhereUniqueInput;
};
