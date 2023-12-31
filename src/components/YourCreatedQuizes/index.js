import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const YourCreatedQuizes = () => {
  const allQuizes = JSON.parse(localStorage.getItem("allQuizes") || "[]");
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
  const currentUserEmail = currentUser[0]?.email;

  // filter users' quizes from all quizes using email
  const currentUserQuizes = allQuizes.filter(
    (e) => e.quizOwner === currentUserEmail
  );

  // const handleQuizDelete = (id) => {
  //   const newQuizes = allQuizes.filter((e) => e.quizId !== id);
  //   localStorage.setItem("allQuizes", JSON.stringify(newQuizes));
  // };

  return (
    <div className="w-1/3 rounded-lg overflow-hidden bg-slate-100 min-h-[50vh]">
      <div className="bg-slate-300 flex justify-center py-2">
        <p className="font-bold">Your Created Quizes</p>
      </div>
      {currentUserQuizes &&
        currentUserQuizes.length > 0 &&
        currentUserQuizes.map((item, index) => {
          return (
            <div
              key={index}
              className=" hover:bg-slate-200 flex justify-between items-center  capitalize  border-b border-slate-600"
            >
              <a
                title="Click to open quiz"
                className=" py-2 px-5"
                target="_blank"
                href={`/quiz/${item.quizId}`}
              >
                {item.quizTitle}
              </a>

              {/* <IconButton
                onClick={() => {
                  handleQuizDelete(item.quizId);
                }}
              >
                <DeleteIcon />
              </IconButton> */}
            </div>
          );
        })}
    </div>
  );
};

export default YourCreatedQuizes;
