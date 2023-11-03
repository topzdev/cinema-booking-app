"use client";

import { useAppSelector } from "@/store";
import { selectSeatSelectedText } from "@/store/slices/floor-plan";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

type Props = {};

const FloorPlanBottomBar = (props: Props) => {
  const text = useAppSelector(selectSeatSelectedText);
  return (
    <Card
      variant="outlined"
      sx={{
        borderLeft: 0,
        borderRight: 0,
        bottom: 0,
        position: "sticky",
        color: "inherit",
        width: "100%",
        zIndex: 1300,
        left: 0,
      }}
    >
      <Toolbar>
        <Box ml={"auto"} display={"flex"} gap={3} alignItems={"center"}>
          <Typography variant="overline">{text}</Typography>
          <Button variant="contained">Save</Button>
        </Box>
      </Toolbar>
    </Card>
  );
};

export default FloorPlanBottomBar;
