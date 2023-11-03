import Theater from "@/models/Theater";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";

export type SeatType = "selected" | "pwd" | "pwd_companion" | "blank";

export type FloorPlanSeat = {
  name: string;
  type?: SeatType;
  x: number;
  y: number;
};

interface State {
  theater_info: Theater;
  seats: FloorPlanSeat[];
}

const initialState: State = {
  theater_info: {
    id: 2,
    created_at: null,
    updated_at: "2023-10-10T11:12:16.000000Z",
    deleted_at: null,
    name: "Hello World Test",
    description: "Hello World",
    row: 10,
    column: 10,
    cinema_id: 1,
    theater_type_id: 1,
    cinema: null,
    theater_type: {
      id: 1,
      created_at: null,
      updated_at: null,
      title: "2d",
      description: "2d Format",
      deleted_at: null,
    },
  },
  seats: [],
};

export const floorPlanSlice = createSlice({
  name: "floor-plan",
  initialState,
  reducers: {
    setTheaterInfo: (state, action: PayloadAction<Theater>) => {
      state.theater_info = action.payload;
    },
  },
});

export const {} = floorPlanSlice.actions;

export const selectPageTitle = (state: RootState) =>
  `${state.floorPlan.theater_info.name} - ${state.floorPlan.theater_info.theater_type.title} Floor Plan`;

export const selectTheatherInfo = (state: RootState) =>
  state.floorPlan.theater_info;

export const selectSeatSelectedText = (state: RootState) =>
  `Selected ${state.floorPlan.seats.length} seats`;

export default floorPlanSlice.reducer;
