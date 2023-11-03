"use client";
import AppPageBar from "@/components/layout/AppPageBar";
import FloorPlanEditor from "@/components/pages/cinema/theater/FloorPlanEditor";
import FloorPlanBottomBar from "@/components/pages/cinema/theater/floor-plan/FloorPlanBottomBar";
import FloorPlanFormDialog from "@/components/pages/cinema/theater/floor-plan/FloorPlanFormDialog";
import SelectedSeatDrawer from "@/components/pages/cinema/theater/floor-plan/SelectedSeatDrawer";
import { useAppSelector } from "@/store";
import { selectPageTitle } from "@/store/slices/floor-plan";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

type Props = {};

const page = (props: Props) => {
  const pageTitle = useAppSelector(selectPageTitle);
  const [dialog, setDialog] = useState(false);
  return (
    <>
      <AppPageBar
        title={pageTitle}
        action={
          <Button size="large" variant="text" onClick={() => setDialog(true)}>
            Update Floor Plan Info
          </Button>
        }
      ></AppPageBar>
      <Container>
        <Grid container>
          <Grid item xs={8} marginX={"auto"}>
            <FloorPlanEditor />
          </Grid>
        </Grid>
        <SelectedSeatDrawer />
      </Container>
      <FloorPlanFormDialog open={dialog} setOpen={setDialog} />
      {/* <FloorPlanBottomBar /> */}
    </>
  );
};

export default page;
