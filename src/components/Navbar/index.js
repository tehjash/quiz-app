import { Button } from "@mui/material";
import React from "react";

const Navbar = ({ showWelcome = false, showLogoutButton = false }) => {
  const currentUserDetails = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="w-full py-2 px-5  flex flex-row items-center justify-between  bg-slate-400">
      <div className="w-1/4 italic">
        {showWelcome && (
          <>
            {currentUserDetails.length > 0 && (
              <p>{`Welcome Back, ${currentUserDetails[0].name}`}</p>
            )}{" "}
          </>
        )}
      </div>

      <p className="font-black text-4xl">Quiz App</p>
      <div className="w-1/4 flex justify-end">
        {showLogoutButton && (
          <Button
            variant="outlined"
            href="/sign-in"
            onClick={() => {
              localStorage.removeItem("currentUser");
            }}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
