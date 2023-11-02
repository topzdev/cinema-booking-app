"use client";

import apiServices from "@/apis";
import { TheaterForm, theaterSchema } from "@/app/(auth)/theater/types";
import { ControlledTextfield } from "@/components/ui/Textfield";
import { pageRoutes } from "@/configs/pageRoutes";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";

type Props = {};

export const theaterDefaultValues = {
  description: "",
  name: "",
  row: 0,
  column: 0,
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
          <Grid container spacing={2}>
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

            <Grid xs={12}>
              <Typography variant="body1">Cinema Layout</Typography>
            </Grid>

            <Grid xs={6}>
              <ControlledTextfield
                type="text"
                control={control}
                name="row"
                label="Row"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              />
            </Grid>
            <Grid xs={6}>
              <ControlledTextfield
                type="text"
                control={control}
                name="column"
                label="Column"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
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
