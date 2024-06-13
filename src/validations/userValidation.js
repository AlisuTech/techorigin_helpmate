import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup.string().required("Your first name is required"),
  lastName: yup.string().required("Your last name is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{11}$/, "phone number must be 11 digits")
    .required(),
  Email: yup
    .string()
    .email("Pls use a valid email")
    .required("Your email is required"),
  officeAddress: yup.string().required("Your office address is required"),
<<<<<<< HEAD
  dateOfBirth: yup.date("must be a date",).required("pls enter your date of birth"),
=======
  dateOfbirth: yup.date("must be a date"),
>>>>>>> feat/isUser_or_sp
  Age: yup
    .number()
    .typeError("Age must be a number")
    .integer()
    .min(16, "you must be atleats 16 years old")
    .max(100, "you cant be older than 100 years")
    .required("Age is required"),
  country: yup.string().required("Your country is required"),
  stateOfOrigin: yup.string().required("Your State is required"),
  Category: yup
    .array()
    .min(1, "select atleast one category")
    .required("select atleast one category"),
  Gender: yup.string().required(),
  Password: yup
    .string()
    .required("password is required")
    .min(5, "password must be atleast 5 characters")
    .matches(/[!@#$%^&*(),.?"":{}|<>]/, "password must contain atleast one symbol")
    .matches(/[0-9]/, "password must contain one number")
    .matches(/[A-Z]/, "password must contain atleast one uppercase letter")
    .matches(/[a-z]/, "must contain atleast one lowercase letter"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password must match")
    .required(),
});
