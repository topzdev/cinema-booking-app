"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";
import FloorPlanSeat from "./floor-plan/FloorPlanSeat";
import { SeatType } from "@/store/slices/floor-plan";

type Props = {
  row?: number;
  column?: number;
};

const FloorPlanEditor = ({ row = 16, column = 16 }: Props) => {
  const seats = Array.from({ length: row * column }, (_, index) => {
    return {
      name: (index + 1).toString(),
      x: index,
      y: 0,
      type: "selected" as SeatType,
    };
  });
  const seatWidth = 12 / column;

  const [selected, setSelected] = useState<any[]>([]);
  const [cursor, setCursor] = useState(null);

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
            <FloorPlanSeat {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FloorPlanEditor;
