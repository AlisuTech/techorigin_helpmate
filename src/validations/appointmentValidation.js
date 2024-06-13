import * as yup from "yup";

export const appointmentSchema = yup.object().shape({
  date: yup.date("must be a date"),
  time: yup.string().matches(
    /^([01]\d|2[0-3]):?([0-5]\d)$/,
    "Must be a valid time in HH:mm format"
  ).required("Time is required"),
  department: yup.string().required("Your department is required"),
  serviceProvider: yup.string().required("Your service provider is required")
});
