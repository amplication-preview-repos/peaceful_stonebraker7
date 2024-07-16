import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  appointmentDate?: DateTimeNullableFilter;
  appointmentTime?: StringNullableFilter;
  status?: "Option1";
  patient?: PatientWhereUniqueInput;
};
