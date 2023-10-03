import * as yup from "yup";

export type Cinema = {
  id: number;
  created_at: string | null;
  updated_at: string | null;
  name: string;
  address: string;
  description: string;
  deleted_at: null;
};

export const cinemaSchema = yup.object({
  name: yup.string().required().label("Cinema Name"),
  address: yup.string().required().label("Addresss"),
  description: yup.string().label("Description"),
});

export type CinemaForm = yup.InferType<typeof cinemaSchema>;
