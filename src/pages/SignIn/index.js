import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  SignInDataValidationSchema,
  signInInitialValues,
  validateSignIn,
} from "../../helpers/SignIn";
import CustomSnackbar from "../../components/Snackbar";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [signInSuccessMessageOpen, setsignInSuccessMessageOpen] =
    useState(false);
  const [signInUnsuccessfullMessageOpen, setsignInUnsuccessfullMessageOpen] =
    useState(false);
  const [wrongPasswordMessageOpen, setWrongPasswordMessageOpen] =
    useState(false);

  const navigate = useNavigate();
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    touched,
  } = useFormik({
    initialValues: signInInitialValues,
    validationSchema: SignInDataValidationSchema,

    onSubmit: ({ email, password }) => {
      const response = validateSignIn(email, password);
      if (response === "valid") {
        navigate("/");
        setsignInSuccessMessageOpen(true);
      } else if (response === "wrongPassword") {
        setWrongPasswordMessageOpen(true);
      } else {
        setsignInUnsuccessfullMessageOpen(true);
      }
    },
  });

  return (
    <>
      <CustomSnackbar
        open={signInSuccessMessageOpen}
        message={"Sign In successfull"}
        hideDuration={2000}
        severity={"success"}
        setOpen={setsignInSuccessMessageOpen}
      />
      <CustomSnackbar
        open={signInUnsuccessfullMessageOpen}
        message={"User not found with this email. Please Sign Up"}
        hideDuration={4000}
        severity={"error"}
        setOpen={setsignInUnsuccessfullMessageOpen}
      />
      <CustomSnackbar
        open={wrongPasswordMessageOpen}
        message={"Wrong Password"}
        hideDuration={2000}
        severity={"error"}
        setOpen={setWrongPasswordMessageOpen}
      />
      <div className="flex justify-center h-screen items-center   ">
        <div className="bg-slate-100  rounded-lg p-10 w-1/3">
          <p className="text-4xl text-center">Sign In</p>
          <form className="flex flex-col">
            <div className="mt-10">
              <TextField
                label="Email"
                size="small"
                id="email"
                variant="standard"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                error={
                  errors.email
                    ? values.email || touched.email
                      ? true
                      : false
                    : false
                }
                helperText={
                  errors.email
                    ? values.email || touched.email
                      ? errors.email
                      : ""
                    : ""
                }
                type="text"
                className="w-full"
              />
            </div>
            <div className="mt-3">
              <TextField
                label="Password"
                size="small"
                id="password"
                variant="standard"
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
                error={
                  errors.password
                    ? values.password || touched.password
                      ? true
                      : false
                    : false
                }
                helperText={
                  errors.password
                    ? values.password || touched.password
                      ? errors.password
                      : ""
                    : ""
                }
                type="password"
                className="w-full"
              />
            </div>

            <Button
              variant="contained"
              onClick={handleSubmit}
              className=" capitalize px-6 !mt-10"
              disabled={
                !isValid || values?.password === "" || values?.email === ""
                  ? true
                  : false
              }
              type="submit"
              size="small"
            >
              Sign In
            </Button>
            <div className="flex justify-center">
              <a href="/sign-up" className="mt-10 underline text-center">
                Sign Up instead
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
