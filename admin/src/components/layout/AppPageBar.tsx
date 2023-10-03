"use client";

import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import { useRouter } from "next/navigation";
type Props = {
  title: React.ReactNode;
  action?: React.ReactNode;
};

const AppPageBar = ({ title, action }: Props) => {
  const { back } = useRouter();

  return (
    <AppBar
      position="static"
      color="inherit"
      variant="outlined"
      elevation={0}
      style={{
        borderLeft: 0,
        borderRight: 0,
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={back}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          {title}
        </Typography>

        {action && (
          <Box ml={"auto"} display={"flex"} alignItems={"center"}>
            {action}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppPageBar;
