import {
  Button,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  addQuestionInitialValues,
  addQuestionValidationSchema,
} from "../../../helpers/CreateQuiz/AddQuestion";

const AddQuestion = ({ setAddQuestion, quiz, setQuiz }) => {
  const [options, setOptions] = useState([
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
    { id: "option4", label: "Option 4" },
  ]);

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: addQuestionInitialValues,
    validationSchema: addQuestionValidationSchema,

    onSubmit: () => {
      var newQuiz = JSON.parse(JSON.stringify(quiz));
      newQuiz.questions.push(values);
      setQuiz(newQuiz);
      setAddQuestion(false);
    },
  });

  return (
    <div className="my-5 w-3/4">
      <form>
        <TextField
          label="Title of Question"
          size="medium"
          id="questionTitle"
          variant="standard"
          onBlur={handleBlur}
          value={values.questionTitle}
          onChange={handleChange}
          error={
            errors.questionTitle
              ? values.questionTitle || touched.questionTitle
                ? true
                : false
              : false
          }
          helperText={
            errors.questionTitle
              ? values.questionTitle || touched.questionTitle
                ? errors.questionTitle
                : ""
              : ""
          }
          type="text"
          className="w-full"
        />
        <div className="flex justify-between items-center my-5">
          <div className="w-2/3">
            {options.map((item) => {
              return (
                <TextField
                  key={item.id}
                  label={item.label}
                  id={item.id}
                  variant="standard"
                  onBlur={handleBlur}
                  value={values[item.id]}
                  onChange={handleChange}
                  type="text"
                  className="w-full !mt-2"
                />
              );
            })}
          </div>
          {/* <div className="flex flex-col justify-center">
            <Button
              variant="outlined"
              onClick={() => {
                const tempArray = [...options];
                setOptions(tempArray.slice(0, tempArray.length - 1));
              }}
              disabled={options.length === 2}
            >
              Reduce Option
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                const tempArray = [...options];
                tempArray.push({
                  id: `option${tempArray.length + 1}`,
                  label: `Option ${tempArray.length + 1}`,
                });
                setOptions(tempArray);
              }}
              disabled={options.length === 5}
              className="!mt-5"
            >
              Add Option
            </Button>
          </div> */}
        </div>

        <div className="mt-10">
          <FormLabel>How many answers are correct?</FormLabel>
          <RadioGroup row value={values.answerType}>
            <FormControlLabel
              value="single"
              control={<Radio />}
              label="Single"
            />
            {/* <FormControlLabel
              value="multiple"
              control={<Radio />}
              label="Multiple"
            /> */}
          </RadioGroup>
        </div>
        <div className="mt-10">
          <FormLabel>Select Correct Answer</FormLabel>
          <RadioGroup row>
            <FormControlLabel
              onClick={() => {
                setFieldValue("correctAnswer", "1");
              }}
              value="1"
              control={<Radio />}
              label="1"
            />
            <FormControlLabel
              onClick={() => {
                setFieldValue("correctAnswer", "2");
              }}
              value="2"
              control={<Radio />}
              label="2"
            />
            <FormControlLabel
              onClick={() => {
                setFieldValue("correctAnswer", "3");
              }}
              value="3"
              control={<Radio />}
              label="3"
            />
            <FormControlLabel
              onClick={() => {
                setFieldValue("correctAnswer", "4");
              }}
              value="4"
              control={<Radio />}
              label="4"
            />
          </RadioGroup>
        </div>

        <div className="flex justify-center mt-10 space-x-10 ">
          <Button
            variant="outlined"
            onClick={() => {
              setAddQuestion(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => handleSubmit()}
            disabled={!isValid || values.questionTitle.length === 0}
          >
            Submit Question
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestion;
