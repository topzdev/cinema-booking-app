"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";
import { FloorPlanSeat, SeatType } from "@/store/slices/floor-plan";
import FloorPlanSeatComp from "./floor-plan/FloorPlanSeat";

type Props = {
  row?: number;
  column?: number;
};

const calculateSeatData = (row: number, column: number) => {
  const newData: FloorPlanSeat[] = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      const name = String.fromCharCode(65 + i) + (j + 1);
      newData.push({ name, x: j + 1, y: 65 + i, type: "blank" });
    }
  }
  return newData;
};

const FloorPlanEditor = ({ row = 16, column = 16 }: Props) => {
  const [seats, setSeats] = useState(calculateSeatData(row, column));
  const seatWidth = 12 / column;

  const setSeatType = (idx: number, type: SeatType) => {
    setSeats((prevArray) => {
      const updatedArray = [...prevArray];
      updatedArray[idx] = { ...updatedArray[idx], type };
      return updatedArray;
    });
  };

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        textAlign={"center"}
        alignItems={"center"}
        bgcolor={"grey.300"}
        height={75}
        sx={{
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          // borderTop: 1,
          // borderLeft: 1,
          // borderColor: "grey.300",
        }}
      >
        Screen
      </Box>

      <Grid mt={4} container>
        {seats.map((item, idx) => (
          <Grid xs={seatWidth} key={idx}>
            <FloorPlanSeatComp idx={idx} {...item} setSeatType={setSeatType} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FloorPlanEditor;
