import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  createQuizInitialValues,
  createQuizValidationSchema,
} from "../../helpers/CreateQuiz";

const CreateQuiz = () => {
  const [showCreateQuizButton, setShowCreateQuizButton] = useState(true);

  const questions = [
    {
      question: {
        label: "Title of Media",
        size: "medium",
        id: "title",
      },
      options: [{
        lable: "option a",
        size: ""
      }],
    },
  ];

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    touched,
  } = useFormik({
    initialValues: createQuizInitialValues,
    validationSchema: createQuizValidationSchema,

    onSubmit: () => {
      console.log(values);
    },
  });

  return (
    <div className="w-2/3 rounded-lg bg-slate-100 min-h-[50vh]">
      {showCreateQuizButton ? (
        <div className="flex justify-center items-center h-full ">
          <Button
            variant="contained"
            onClick={() => {
              setShowCreateQuizButton(false);
            }}
          >
            Create Quiz
          </Button>
        </div>
      ) : (
        <div className="pl-5 py-2">
          <TextField
            label="Title of Quiz?"
            size="medium"
            id="title"
            variant="standard"
            onBlur={handleBlur}
            value={values.title}
            onChange={handleChange}
            error={
              errors.title
                ? values.title || touched.title
                  ? true
                  : false
                : false
            }
            helperText={
              errors.title
                ? values.title || touched.title
                  ? errors.title
                  : ""
                : ""
            }
            type="text"
            className="w-2/3"
          />
        </div>
      )}
    </div>
  );
};

export default CreateQuiz;
