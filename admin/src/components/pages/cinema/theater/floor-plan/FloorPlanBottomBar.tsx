"use client";

import { useAppSelector } from "@/store";
import { selectSeatSelectedText } from "@/store/slices/floor-plan";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

type Props = {};

const FloorPlanBottomBar = (props: Props) => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      variant="outlined"
      elevation={0}
      sx={{
        borderLeft: 0,
        borderRight: 0,
        bottom: 0,
      }}
    >
      <Toolbar>
        <Box ml={"auto"} display={"flex"} alignItems={"center"}>
          <Typography variant="body1">Hello World</Typography>
          <Button variant="contained">Save</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default FloorPlanBottomBar;
