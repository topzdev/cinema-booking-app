"use client";

import React from "react";
import { SnackbarProvider } from "notistack";

type Props = { children: React.ReactNode };

const MuiSnackbarProvider = (props: Props) => {
  return (
    <SnackbarProvider
      anchorOrigin={{
        horizontal: "right",
        vertical: "bottom",
      }}
      autoHideDuration={5000}
      maxSnack={3}
    >
      {props.children}
    </SnackbarProvider>
  );
};

export default MuiSnackbarProvider;
