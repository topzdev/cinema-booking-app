import TheaterAddForm from "@/components/pages/theater/TheaterAddForm";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import React from "react";
import AppPageBar from "@/components/layout/AppPageBar";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <AppPageBar title="Add Theater"></AppPageBar>
      <Container>
        <Grid container>
          <Grid mt={3} xs={12}>
            <TheaterAddForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default page;
