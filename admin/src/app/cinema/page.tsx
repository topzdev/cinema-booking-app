import CinemaTable from "@/components/pages/cinema/CinemaTable";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <Container>
      <Grid container>
        <Grid xs={12}>
          <Typography variant="h4">Cinema Manager</Typography>
        </Grid>
        <Grid mt={5} xs={12}>
          <CinemaTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default IndexPage;
