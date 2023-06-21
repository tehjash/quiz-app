import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import CreateQuiz from "../../components/CreateQuiz";
import YourCreatedQuizes from "../../components/YourCreatedQuizes";
import { Button } from "@mui/material";

const Homepage = () => {
  const [showCreateQuizButton, setShowCreateQuizButton] = useState(true);
  return (
    <>
      <Navbar showWelcome showLogoutButton />
      <div className="flex p-5 space-x-5">
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
            <CreateQuiz setShowCreateQuizButton={setShowCreateQuizButton} />
          )}
        </div>
        <YourCreatedQuizes />
      </div>
      ;
    </>
  );
};

export default Homepage;
