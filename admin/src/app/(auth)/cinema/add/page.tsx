import CinemaAddForm from "@/components/pages/CinemaAddForm";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import React from "react";
import AppPageBar from "@/components/layout/AppPageBar";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <AppPageBar title="Add Cinema"></AppPageBar>
      <Container>
        <Grid container>
          <Grid mt={3} xs={12}>
            <CinemaAddForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default page;
