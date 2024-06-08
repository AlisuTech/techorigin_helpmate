import * as yup from 'yup'

export const userSchema = yup.object().shape({

    firstName: yup.string().required("Your first name is required"),
    lastName: yup.string().required("Your last name is required"),
    phoneNumber: yup.number().min(11).max(11).required("Your phone Number is not correct"),
    email: yup.string().email().required("Your email is required"),
    officeAddress: yup.string().required("Your office address is required"),
    // dateOfbirth: yup.number().integer().min(16).max(200).required("Your age must be 16 and above"),
    dateOfBirth: yup.number().integer().required("Your age must be 16 and above"),
    country: yup.string().required("Your country is required"),
    stateOfOrigin: yup.string().required("Your State is required"),
    password: yup.string().min(4).max(30).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password dont match").required(),
})