import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  SignUpDataValidationSchema,
  SignUpUserAlreadyExists,
  signUpInitialValues,
} from "../../helpers/SignUp";
import CustomSnackbar from "../../components/Snackbar";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signUpSuccessfullMessageOpen, setsignUpSuccessfullMessageOpen] =
    useState(false);
  const [signUpUnsuccessfullMessageOpen, setsignUpUnsuccessfullMessageOpen] =
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
    initialValues: signUpInitialValues,
    validationSchema: SignUpDataValidationSchema,

    onSubmit: ({ name, email, password }) => {
      if (SignUpUserAlreadyExists(name, email, password)) {
        navigate("/");
        setsignUpUnsuccessfullMessageOpen(true);
      } else {
        setsignUpSuccessfullMessageOpen(true);
      }
    },
  });
  return (
    <>
      <CustomSnackbar
        open={signUpSuccessfullMessageOpen}
        message={"Sign Up successfull"}
        hideDuration={2000}
        severity={"success"}
        setOpen={setsignUpSuccessfullMessageOpen}
      />
      <CustomSnackbar
        open={signUpUnsuccessfullMessageOpen}
        message={"User Already exists with same email id"}
        hideDuration={3000}
        severity={"error"}
        setOpen={setsignUpUnsuccessfullMessageOpen}
      />
      <div className="flex justify-center h-screen items-center   ">
        <div className="bg-slate-100  rounded-lg p-10 w-1/3">
          <p className="text-4xl text-center">Sign Up</p>
          <form className="flex flex-col">
            <div className="mt-10">
              <TextField
                label="Name"
                size="small"
                id="name"
                variant="standard"
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
                error={
                  errors.name
                    ? values.name || touched.name
                      ? true
                      : false
                    : false
                }
                helperText={
                  errors.name
                    ? values.name || touched.name
                      ? errors.name
                      : ""
                    : ""
                }
                type="text"
                className="w-full"
              />
            </div>
            <div className="mt-3">
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
                !isValid ||
                values?.name.length > 30 ||
                values?.password === "" ||
                values?.email === ""
                  ? true
                  : false
              }
              type="submit"
              size="small"
            >
              Sign Up
            </Button>
            <div className="flex justify-center">
              <a href="/sign-in" className="mt-10 underline text-center">
                Sign In instead
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
