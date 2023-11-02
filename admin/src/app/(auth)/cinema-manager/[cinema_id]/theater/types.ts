import * as yup from "yup";

export const theaterSchema = yup.object({
  name: yup.string().required().label("Theater Name"),
  description: yup.string().label("Description"),
  theater_type_id: yup.string().label("Theater Type"),
  row: yup.number().label("Row"),
  column: yup.number().label("Column"),
});

export type TheaterForm = yup.InferType<typeof theaterSchema>;
