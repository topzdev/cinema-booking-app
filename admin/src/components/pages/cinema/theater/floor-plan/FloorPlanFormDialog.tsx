"use client";

import { ControlledTextfield } from "@/components/ui/Textfield";
import { useAppSelector } from "@/store";
import { selectPageTitle, selectTheatherInfo } from "@/store/slices/floor-plan";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { useSnackbar } from "notistack";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";

import { FloorPlanForm, floorPlanSchema } from "./type";

type Props = {
  open: boolean;
  setOpen: (show: boolean) => void;
};

const FloorPlanFormDialog = ({ open, setOpen }: Props) => {
  const theaterInfo = useAppSelector(selectTheatherInfo);
  const pageTitle = useAppSelector(selectPageTitle);
  const { enqueueSnackbar } = useSnackbar();

  const { control, handleSubmit, formState } = useForm<FloorPlanForm>({
    resolver: yupResolver(floorPlanSchema),
    defaultValues: {
      column: theaterInfo.column,
      row: theaterInfo.row,
    },
  });

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

  const { isSubmitting } = formState;

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle id="alert-dialog-title">{pageTitle}</DialogTitle>
      <DialogContent dividers>
        <form onSubmit={onSubmit}>
          <Grid spacing={3} container>
            <Grid item xs={6}>
              <ControlledTextfield control={control} name="row" label="Row" />
            </Grid>

            <Grid item xs={6}>
              <ControlledTextfield
                control={control}
                name="column"
                label="Column"
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
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={isSubmitting}
          className="ml-auto"
          type="submit"
          size="large"
          variant="text"
          onClick={onSubmit}
        >
          Update
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default FloorPlanFormDialog;
