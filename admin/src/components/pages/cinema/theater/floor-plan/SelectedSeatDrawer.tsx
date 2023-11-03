"use client";
import { ControlledSelect } from "@/components/ui/Select";
import { ControlledTextfield } from "@/components/ui/Textfield";
import { yupResolver } from "@hookform/resolvers/yup";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import { useSnackbar } from "notistack";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { SeatInfoForm, seatInfoSchema } from "./type";
import Box from "@mui/material/Box";

type Props = {};

const SelectedSeatDrawer = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { control, handleSubmit, formState } = useForm<SeatInfoForm>({
    resolver: yupResolver(seatInfoSchema),
  });

  const { isSubmitting } = formState;

  const onSubmit = async (e: FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();

    await handleSubmit(async (data) => {
      console.log(data);
      try {
        enqueueSnackbar({
          message: "Theater Floor Plan Updated",
          variant: "success",
        });
      } catch (error) {
        console.error(error);
        enqueueSnackbar({
          message: "Something went wrong",
          variant: "error",
        });
      } finally {
        setOpen(false);
      }
    })(e);
  };

  return (
    <Drawer
      sx={{
        width: 400,
      }}
      open={true}
      variant="persistent"
      anchor="right"
    >
      <Toolbar />
      <Box>
        <CardHeader title="A1 - Set Info"></CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <Grid spacing={3} container>
              <Grid item xs={12}>
                <ControlledTextfield
                  control={control}
                  name="name"
                  label="Name"
                />
              </Grid>

              <Grid item xs={12}>
                <ControlledSelect
                  control={control}
                  name="seat_type"
                  label="Seat Type"
                />
              </Grid>

              {/* <Grid item xs={12}>
              <ControlledTextfield
                control={control}
                name="seat_count"
                label="Seat Count"
              />
            </Grid> */}
            </Grid>
          </form>
        </CardContent>
      </Box>
    </Drawer>
  );
};

export default SelectedSeatDrawer;
