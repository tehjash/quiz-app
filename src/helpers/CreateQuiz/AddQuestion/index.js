import * as yup from "yup";

export const addQuestionInitialValues = {
  questionTitle: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  answerType: "single",
  correctAnswer: "",
};

export const addQuestionValidationSchema = yup.object().shape({
  questionTitle: yup.string().required("Title of Question is required"),
  option1: yup.string().required("Option 1 is required"),
  option2: yup.string().required("Option 2 is required"),
  option3: yup.string().required("Option 3 is required"),
  option4: yup.string().required("Option 4 is required"),
  correctAnswer: yup.string().required("Correct answer is required"),
});
