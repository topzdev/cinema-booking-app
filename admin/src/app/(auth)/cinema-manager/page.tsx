import AppPageBar from "@/components/layout/AppPageBar";
import CinemaTable from "@/components/pages/cinema/CinemaTable";
import { pageRoutes } from "@/configs/pageRoutes";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <>
      <AppPageBar
        title="Cinema Manager"
        action={
          <Button
            size="large"
            variant="contained"
            LinkComponent={Link}
            href={pageRoutes.cinemaManager.pages.add.href}
          >
            Add Cinema
          </Button>
        }
      ></AppPageBar>
      <Container>
        <Grid container>
          <Grid mt={5} xs={12}>
            <CinemaTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default IndexPage;
