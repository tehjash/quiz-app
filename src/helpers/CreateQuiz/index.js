import * as yup from "yup";

export const createQuizInitialValues = {
  title: "",
};

export const createQuizValidationSchema = yup.object().shape({
  title: yup.string().required("Name is required"),
});

export const handleSubmitQuiz = (quiz) => {
  // extract all Quizes
  const allQuizes = JSON.parse(localStorage.getItem("allQuizes") || "[]");
  // push our quiz
  allQuizes.push(quiz);
  // setItem
  localStorage.setItem("allQuizes", JSON.stringify(allQuizes));
};
