"use client";
import { ConfirmProvider } from "material-ui-confirm";
import React from "react";

type Props = { children: React.ReactNode };

const MuiConfirmProvider = (props: Props) => {
  return <ConfirmProvider>{props.children}</ConfirmProvider>;
};

export default MuiConfirmProvider;
