import LoginForm from "@/components/pages/login/LoginForm";
import Box from "@mui/material/Box";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default page;
