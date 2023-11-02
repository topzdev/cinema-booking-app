"use client";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

const ReduxProvider = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
