import React from "react";

const YourCreatedQuizes = () => {
  const allQuizes = JSON.parse(localStorage.getItem("allQuizes"));
  console.log(allQuizes);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const currentUserEmail = currentUser[0].email;

  const currentUserQuizes = allQuizes.filter(
    (e) => e.quizOwner === currentUserEmail
  );
  console.log("merre quiz", currentUserQuizes);

  return (
    <div className="w-1/3 rounded-lg overflow-hidden bg-slate-100 min-h-[50vh]">
      <div className="bg-slate-300 flex justify-center py-2">
        <p className="font-bold">Your Created Quizes</p>
      </div>
      {currentUserQuizes.length > 0 &&
        currentUserQuizes.map((item, index) => {
          return (
            <div
            // title="Click to open quiz"
              key={index}
              className="py-2 flex justify-center hover:bg-slate-200 cursor-pointer capitalize  border-b border-slate-600"
            >
              <p>{item.quizTitle}</p>
            </div>
          );
        })}
    </div>
  );
};

export default YourCreatedQuizes;
