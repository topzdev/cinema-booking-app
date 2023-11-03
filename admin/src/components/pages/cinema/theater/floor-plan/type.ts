import * as yup from "yup";

export const floorPlanSchema = yup.object({
  row: yup.number().required().label("Row"),
  column: yup.number().required().label("Column"),
  seat_count: yup.number().label("Seat Count"),
});

export type FloorPlanForm = yup.InferType<typeof floorPlanSchema>;

export const seatInfoSchema = yup.object({
  name: yup.number().required().label("Row"),
  seat_type: yup.number().required().label("Column"),
});

export type SeatInfoForm = yup.InferType<typeof seatInfoSchema>;
