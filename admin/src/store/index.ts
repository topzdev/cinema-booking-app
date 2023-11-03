import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import counterReducer from "./slices/counter";
import cinemaManagerReducer from "./slices/cinema-manager";
import floorPlanReducer from "./slices/floor-plan";
// ...

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cinemaManager: cinemaManagerReducer,
    floorPlan: floorPlanReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
