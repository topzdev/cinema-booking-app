"use client";

import Box from "@mui/material/Box";
import React from "react";
import AccessibleIcon from "@mui/icons-material/Accessible";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import ChairIcon from "@mui/icons-material/Chair";
import Typography from "@mui/material/Typography";
import { FloorPlanSeat } from "@/store/slices/floor-plan";

type Props = FloorPlanSeat;

const SEAT_TYPE_ICON = {
  blank: <></>,
  selected: <ChairIcon />,
  pwd: <AccessibleIcon />,
  pwd_companion: <WheelchairPickupIcon />,
};

const FloorPlanSeat = ({ name, type = "selected" }: Props) => {
  const color = type === "blank" ? "grey.300" : "orange";
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: 42,
        border: 1,
        borderColor: color,
        color,
        width: "100%",
        userSelect: "none",
      }}
    >
      {SEAT_TYPE_ICON[type]}
      <Typography sx={{ fontSize: 10 }}>A1</Typography>
    </Box>
  );
};

export default FloorPlanSeat;
