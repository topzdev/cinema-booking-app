"use client";

import apiServices from "@/apis";
import { TheaterForm, theaterSchema } from "@/app/(auth)/theater/types";
import { pageRoutes } from "@/configs/pageRoutes";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { FormEvent } from "react";
import { Controller, useForm } from "react-hook-form";

type Props = {};

export const theaterDefaultValues = {
  address: "",
  description: "",
  name: "",
};

const TheaterAddForm = (props: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  const { control, handleSubmit, formState } = useForm<TheaterForm>({
    resolver: yupResolver(theaterSchema),
    defaultValues: theaterDefaultValues,
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await handleSubmit(async (data) => {
      console.log(data);
      try {
        const response = await apiServices.theater.addTheater(data);
        console.log(response);
        enqueueSnackbar({
          message: "Theater Added",
          variant: "success",
          action: () => (
            <Button
              color="success"
              variant="contained"
              disableElevation
              LinkComponent={Link}
              href={pageRoutes.theater.pages.edit(response.id).href}
            >
              View
            </Button>
          ),
        });
      } catch (error) {
        console.error(error);
        enqueueSnackbar({
          message: "Something went wrong",
          variant: "error",
        });
      }
    })(e);
  };

  const { isSubmitting } = formState;

  return (
    <form onSubmit={onSubmit}>
      <Card variant="outlined">
        <CardContent>
          <Grid rowGap={2} container>
            <Grid xs={12}>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    label="Theater Name"
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    variant="filled"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid xs={12}>
              <Controller
                name="address"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    label="Address"
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    variant="filled"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid xs={12}>
              <Controller
                name="description"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    multiline
                    minRows={5}
                    label="Description"
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    variant="filled"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid display={"flex"} justifyContent={"flex-end"} xs={12}>
              <LoadingButton
                loading={isSubmitting}
                className="ml-auto"
                type="submit"
                size="large"
                variant="contained"
              >
                Submit
              </LoadingButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export default TheaterAddForm;
