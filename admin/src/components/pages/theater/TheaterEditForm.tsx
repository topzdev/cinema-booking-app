"use client";

import {
  Theater,
  TheaterForm,
  theaterSchema,
} from "@/app/(auth)/theater/types";
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
import { theaterDefaultValues } from "./TheaterAddForm";
import { useQuery } from "@tanstack/react-query";
import { pageRoutes } from "@/configs/pageRoutes";
import apiServices from "@/apis";
import { ControlledTextfield } from "@/components/ui/Textfield";

type Props = {};

const TheaterEditForm = (props: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();

  const { control, handleSubmit, formState, reset } = useForm<TheaterForm>({
    resolver: yupResolver(theaterSchema),
    defaultValues: theaterDefaultValues,
  });

  const { data, isLoading, isFetching, status } = useQuery<Theater>({
    queryKey: ["updateTheater"],
    queryFn: () => apiServices.theater.getOneTheater(params.id as string),
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
        const response = await apiServices.theater.updateTheater(
          params.id as string,
          data
        );
        console.log(response);
        enqueueSnackbar({
          message: "Theater Updated",
          variant: "success",
          action: () => (
            <Button
              color="success"
              variant="contained"
              disableElevation
              LinkComponent={Link}
              href={pageRoutes.theater.href}
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
              <ControlledTextfield
                control={control}
                name="name"
                label="Theater Name"
              />
            </Grid>

            <Grid xs={12}>
              <ControlledTextfield
                control={control}
                name="description"
                multiline
                minRows={5}
                label="Description"
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

export default TheaterEditForm;
