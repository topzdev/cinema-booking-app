"use client";

import { cinemaAPI } from "@/apis/cinema";
import { Cinema, CinemaForm, cinemaSchema } from "@/app/(auth)/cinema/types";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { Card, CardContent, LinearProgress } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSnackbar } from "notistack";
import { FormEvent, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { cinemaDefaultValues } from "../CinemaAddForm";
import { useQuery } from "@tanstack/react-query";
import { pageRoutes } from "@/configs/pageRoutes";

type Props = {};

const CinemaEditForm = (props: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();

  const { control, handleSubmit, formState, reset } = useForm<CinemaForm>({
    resolver: yupResolver(cinemaSchema),
    defaultValues: cinemaDefaultValues,
  });

  const { data, isLoading, isFetching, status } = useQuery<Cinema>({
    queryKey: ["updateCinema"],
    queryFn: () => cinemaAPI.getOneCinema(params.id as string),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (status === "success") {
      reset(data);
    }
  }, [status, data]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await handleSubmit(async (data) => {
      try {
        const response = await cinemaAPI.updateCinema(
          params.id as string,
          data
        );
        console.log(response);
        enqueueSnackbar({
          message: "Cinema Updated",
          variant: "success",
          action: () => (
            <Button
              color="success"
              variant="contained"
              disableElevation
              LinkComponent={Link}
              href={pageRoutes.cinema.href}
            >
              View List
            </Button>
          ),
        });
      } catch (error) {
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
        {(isLoading || isFetching) && <LinearProgress />}
        <CardContent>
          <Grid rowGap={2} container>
            <Grid xs={12}>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    label="Cinema Name"
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

export default CinemaEditForm;
