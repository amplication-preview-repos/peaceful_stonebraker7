import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type PatientWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
};
