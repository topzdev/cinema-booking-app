"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";
import React, { FormEvent } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Image from "next/image";
type Props = {};

export const loginSchema = yup.object({
  email: yup.string().required().label("Email"),
  password: yup.string().required().label("Password"),
});

export type LoginForm = yup.InferType<typeof loginSchema>;

const LoginForm = (props: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  const { control, handleSubmit, formState } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await handleSubmit(async (data) => {
      try {
        enqueueSnackbar({
          message: "Welcome to Sinefy Admin Dashboard",
          variant: "success",
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
      <Card
        sx={{
          width: 500,
        }}
      >
        <CardContent>
          <Typography variant="h4" textAlign={"center"}>
            Welcome!
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            Sinefy Admin, Please enter your credentials
          </Typography>
          <Grid rowGap={2} mt={5} container>
            <Grid xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    label="Email Address"
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
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    type="password"
                    label="Password"
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    variant="filled"
                    fullWidth
                  />
                )}
              />
            </Grid>{" "}
            <Grid display={"flex"} justifyContent={"flex-end"} xs={12}>
              <LoadingButton
                loading={isSubmitting}
                className="ml-auto"
                type="submit"
                size="large"
                variant="contained"
                fullWidth
              >
                Login{" "}
              </LoadingButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export default LoginForm;
