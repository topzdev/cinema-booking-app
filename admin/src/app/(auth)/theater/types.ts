import * as yup from "yup";

export type Theater = {
  id: number;
  created_at: string | null;
  updated_at: string | null;
  name: string;
  address: string;
  description: string;
  deleted_at: null;
};

export const theaterSchema = yup.object({
  name: yup.string().required().label("Theater Name"),
  address: yup.string().required().label("Addresss"),
  description: yup.string().label("Description"),
});

export type TheaterForm = yup.InferType<typeof theaterSchema>;
