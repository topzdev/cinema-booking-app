"use client";

import AppPageBar from "@/components/layout/AppPageBar";
import TheaterEditForm from "@/components/pages/theater/TheaterEditForm";
import { pageRoutes } from "@/configs/pageRoutes";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";

import { useConfirm } from "material-ui-confirm";
import { useParams, useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import DeleteIcon from "@mui/icons-material/Delete";
import apiServices from "@/apis";
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
      await apiServices.theater.deleteTheater(id);
      enqueueSnackbar({
        message: "Theater Deleted",
        variant: "success",
      });

      router.push(pageRoutes.theater.href);
    });
  };

  return (
    <>
      <AppPageBar
        title="Edit Theater"
        action={
          <IconButton
            size="large"
            onClick={() => handleDelete(params.theater_id as string)}
          >
            <DeleteIcon />
          </IconButton>
        }
      ></AppPageBar>
      <Container>
        <Grid container>
          <Grid mt={3} xs={12}>
            <TheaterEditForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default page;
