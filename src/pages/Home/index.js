import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import CreateQuiz from "../../components/CreateQuiz";
import YourCreatedQuizes from "../../components/YourCreatedQuizes";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [showCreateQuizButton, setShowCreateQuizButton] = useState(true);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");

  useEffect(() => {
    currentUser.length === 0 && navigate("/sign-in");
  }, []);

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
