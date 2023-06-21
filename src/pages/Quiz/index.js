import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Options from "./Options";
import { Button } from "@mui/material";

const Quiz = () => {
  const { quizId } = useParams();
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const allQuizes = JSON.parse(localStorage.getItem("allQuizes") || "[]");
  const quiz = allQuizes.filter((e) => e.quizId === quizId);

  const totalNumberOfQuestions = quiz[0].questions.length;
  console.log(score);
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
              <Options item={item} score={score} setScore={setScore} />
            </div>
          );
        })}
        <div className="my-10 text-center">
          <Button
            variant="contained"
            onClick={() => {
              setShowScore(true);
            }}
          >
            Submit Quiz
          </Button>
          {showScore && (
            <p className="mt-5">{`You Scored ${score}/${totalNumberOfQuestions}`}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
