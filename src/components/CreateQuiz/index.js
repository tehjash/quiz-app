import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  createQuizInitialValues,
  createQuizValidationSchema,
  handleSubmitQuiz,
} from "../../helpers/CreateQuiz";
import AddQuestion from "./AddQuestion";

const CreateQuiz = ({ setShowCreateQuizButton }) => {
  const [addQuestion, setAddQuestion] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [quiz, setQuiz] = useState({
    quizOwner: currentUser[0].email,
    quizId: "",
    quizTitle: "",
    questions: [],
  });

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    touched,
    resetForm,
  } = useFormik({
    initialValues: createQuizInitialValues,
    validationSchema: createQuizValidationSchema,

    onSubmit: () => {
      quiz.quizTitle = values.title;
      quiz.quizId = Math.random().toString(36).substring(2, 8);
      handleSubmitQuiz(quiz);
      setShowCreateQuizButton(true);
    },
  });

  return (
    <form className="h-full" onSubmit={handleSubmit}>
      <div className="px-5 flex flex-col py-2">
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
        />
        <div className="mt-5">
          {quiz.questions &&
            quiz.questions.map((item, index) => {
              return (
                <div key={index} className="flex space-x-5 text-2xl">
                  <p>{index + 1}.</p>
                  <p>{item.questionTitle}</p>
                </div>
              );
            })}
        </div>
        <div className="my-5">
          {addQuestion ? (
            <>
              <AddQuestion
                quiz={quiz}
                setQuiz={setQuiz}
                setAddQuestion={setAddQuestion}
              />
            </>
          ) : (
            <div className="flex justify-center my-5">
              <Button
                variant="contained"
                onClick={() => {
                  setAddQuestion(true);
                }}
                className="w-1/3"
              >
                Add Question
              </Button>
            </div>
          )}
        </div>
        <div className="flex justify-around my-24 ">
          <Button
            variant="outlined"
            onClick={() => {
              setShowCreateQuizButton(true);
            }}
            className="w-1/3"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            className="w-1/3"
            disabled={quiz.questions.length === 0 || !isValid}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateQuiz;
