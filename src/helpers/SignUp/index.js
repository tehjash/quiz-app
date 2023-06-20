import * as yup from "yup";

export const signUpInitialValues = {
  name: "",
  email: "",
  password: "",
};

export const SignUpDataValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .max(30, "Name should not exceed 30 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address format")
    .matches(
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}/,
      "Invalid email address format"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be atleast 8 characters long"),
});

export const SignUpUserAlreadyExists = (name, email, password) => {
  const userToValidate = {
    name: name,
    email: email,
    password: password,
  };

  //extract all users
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // if userToValidate.email exists return true else add user + return false
  if (users.filter((e) => e.email === userToValidate.email).length > 0) {
    return true;
  } else {
    users.push(userToValidate);
    localStorage.setItem("currentUser", JSON.stringify(userToValidate));
    localStorage.setItem("users", JSON.stringify(users));
    return false;
  }
};
