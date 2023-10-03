"use client";

import { cinemaAPI } from "@/apis/cinema";
import AppPageBar from "@/components/layout/AppPageBar";
import CinemaEditForm from "@/components/pages/cinema/CinemaEditForm";
import { pageRoutes } from "@/configs/pageRoutes";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";

import { useConfirm } from "material-ui-confirm";
import { useParams, useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import DeleteIcon from "@mui/icons-material/Delete";
type Props = {};

const page = (props: Props) => {
  const params = useParams();
  const router = useRouter();
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = async (id: string) => {
    confirm({
      title: "Delete Item",
      description: "Are you sure to delete this item?",
      confirmationText: "Yes",
    }).then(async () => {
      await cinemaAPI.deleteCinema(id);
      enqueueSnackbar({
        message: "Cinema Deleted",
        variant: "success",
      });

      router.push(pageRoutes.cinema.href);
    });
  };

  return (
    <>
      <AppPageBar
        title="Edit Cinema"
        action={
          <IconButton
            size="large"
            onClick={() => handleDelete(params.id as string)}
          >
            <DeleteIcon />
          </IconButton>
        }
      ></AppPageBar>
      <Container>
        <Grid container>
          <Grid mt={3} xs={12}>
            <CinemaEditForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default page;
