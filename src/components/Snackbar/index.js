import { Alert, Snackbar } from "@mui/material";
import React from "react";

const CustomSnackbar = ({ open, hideDuration, message, setOpen, severity }) => {
  const handleClose = (event, reason) => {
    // prevents closing before defined duration
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={hideDuration}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
