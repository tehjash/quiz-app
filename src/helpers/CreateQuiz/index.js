import * as yup from "yup";

export const createQuizInitialValues = {
  title: "",
  question1: { question: "", answers: [] },
  question2: { question: "", answers: [] },
  question3: { question: "", answers: [] },
  question4: { question: "", answers: [] },
  question5: { question: "", answers: [] },
  question6: { question: "", answers: [] },
  question7: { question: "", answers: [] },
  question8: { question: "", answers: [] },
  question9: { question: "", answers: [] },
  question10: { question: "", answers: [] },
};

export const createQuizValidationSchema = yup.object().shape({
  title: yup.string().required("Name is required"),

  question1: yup.object().shape({
    question: yup
      .string()
      .required("Atleast one question is required to publish the Quiz"),
    answers: yup
      .array()
      .required("Atleast one answer is required")
      .min(1)
      .of(yup.string()),
  }),
  question2: yup.object().shape({
    question: yup.string(),
    answers: yup
      .array()
      .min(1, "Atleast one answer is required")
      .of(yup.string())
      .when("question2", (question2) => {
        if (question2) {
          return yup
            .array()
            .required("Atleast one answer is required")
            .min(1)
            .of(yup.string());
        }
      }),
  }),
});
