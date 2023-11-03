import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

interface CounterState {
  cinema_info: {
    name: string;
    description: string | null;
    address: string;
  };
}

const initialState: CounterState = {
  cinema_info: {
    name: "SM Manila",
    address: "Felix Huertas Sampaloc Manila",
    description: "SM Manila Cinema located in manila",
  },
};

export const cinemaManagerSlice = createSlice({
  name: "counter-manager",
  initialState,
  reducers: {},
});

export const {} = cinemaManagerSlice.actions;

export const selectCinemaInfo = (state: RootState) =>
  state.cinemaManager.cinema_info;

export default cinemaManagerSlice.reducer;
