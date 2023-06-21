import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Options from "./Options";

const Quiz = () => {
  const { quizId } = useParams();

  const allQuizes = JSON.parse(localStorage.getItem("allQuizes") || "[]");
  const quiz = allQuizes.filter((e) => e.quizId === quizId);

  return (
    <>
      <Navbar />
      <div className="m-5 p-5 rounded-lg bg-slate-300">
        <p className=" text-center font-semibold text-2xl">
          {quiz[0].quizTitle}
        </p>
        {quiz[0].questions.map((item, index) => {
          return (
            <div key={index} className="mt-10">
              <p className="text-xl">
                Question {index + 1}. {item.questionTitle}
              </p>
              <Options item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Quiz;
