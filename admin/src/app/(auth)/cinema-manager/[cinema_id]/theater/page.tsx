import AppPageBar from "@/components/layout/AppPageBar";
import TheaterTable from "@/components/pages/theater/TheaterTable";
import { pageRoutes } from "@/configs/pageRoutes";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import React from "react";

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <>
      <AppPageBar
        title="Theater Manager"
        action={
          <Button
            size="large"
            variant="contained"
            LinkComponent={Link}
            href={pageRoutes.theater.pages.add.href}
          >
            Add Theater
          </Button>
        }
      ></AppPageBar>
      <Container>
        <Grid container>
          <Grid mt={5} xs={12}>
            <TheaterTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default IndexPage;
