import * as yup from "yup";

export const signInInitialValues = {
  email: "",
  password: "",
};

export const SignInDataValidationSchema = yup.object().shape({
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

export const validateSignIn = (email, password) => {
  const userToValidate = {
    email: email,
    password: password,
  };

  //extract all users
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // check if user exists in database using email
  const userMatch = users.filter((e) => e.email === userToValidate.email);

  // if user exists return true, set current user
  if (userMatch.length > 0) {
    if (userMatch[0].password === userToValidate.password) {
      localStorage.setItem("currentUser", JSON.stringify(userMatch));
      return "valid";
    } else {
      return "wrongPassword";
    }
  } else {
    return "notFound";
  }
};
