"use client";

import Box from "@mui/material/Box";
import React from "react";
import AccessibleIcon from "@mui/icons-material/Accessible";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import ChairIcon from "@mui/icons-material/Chair";
import Typography from "@mui/material/Typography";
import { FloorPlanSeat, SeatType } from "@/store/slices/floor-plan";

type Props = {
  idx: number;
  setSeatType: (idx: number, type: SeatType) => void;
} & FloorPlanSeat;

const SEAT_TYPE_ICON = {
  blank: <></>,
  selected: <ChairIcon />,
  pwd: <AccessibleIcon />,
  pwd_companion: <WheelchairPickupIcon />,
};

const FloorPlanSeat = ({
  name,
  type = "selected",
  x,
  y,
  setSeatType,
  idx,
}: Props) => {
  const color = type === "blank" ? "grey.300" : "orange";
  return (
    <Box
      onClick={() => setSeatType(idx, type === "blank" ? "selected" : "blank")}
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
        cursor: "pointer",
      }}
    >
      {SEAT_TYPE_ICON[type]}
      <Typography sx={{ fontSize: 10 }}>{name}</Typography>
      <Typography sx={{ fontSize: 10 }}>
        {y},{x}
      </Typography>
    </Box>
  );
};

export default FloorPlanSeat;
