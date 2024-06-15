import * as yup from "yup";

export const serviceProviderSchema = yup.object().shape({
    firstName: yup.string().required("Your first name is required"),
    lastName: yup.string().required("Your last name is required"),
    phoneNumber: yup
      .string()
      .matches(/^\d{11}$/, "phone number must be 11 digits"),
      // .required(),
    email: yup
      .string()
      .email("Pls use a valid email")
      .required("Your email is required"),
    dateOfBirth: yup.date("must be a date",).required("pls enter your date of birth"),
    // Age: yup
    //   .number()
    //   .typeError("Age must be a number")
    //   .integer()
    //   .min(16, "you must be atleats 16 years old")
    //   .max(100, "you cant be older than 100 years")
    //   .required("Age is required"),
    country: yup.string().required("Your country is required"),
    stateOfOrigin: yup.string().required("Your State is required"),
    // Gender: yup.string().required(),
    password: yup
      .string()
      .required("password is required"),
      // .min(5, "password must be atleast 5 characters")
      // .matches(/[!@#$%^&*(),.?"":{}|<>]/, "password must contain atleast one symbol")
      // .matches(/[0-9]/, "password must contain one number")
      // .matches(/[A-Z]/, "password must contain atleast one uppercase letter")
      // .matches(/[a-z]/, "must contain atleast one lowercase letter"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password must match")
      .required(),

    officeAddress: yup
        .string(),
        // .required("Your office address is required"),

    price: yup
        .string()
        .required("price required"),
});