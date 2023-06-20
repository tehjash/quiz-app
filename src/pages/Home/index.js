import React from "react";
import Navbar from "../../components/Navbar";
import CreateQuiz from "../../components/CreateQuiz";
import YourCreatedQuizes from "../../components/YourCreatedQuizes";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="flex p-5 space-x-5">
        <CreateQuiz />
        <YourCreatedQuizes />
      </div>
      ;
    </>
  );
};

export default Homepage;
