import AppPageBar from "@/components/layout/AppPageBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Sm Manila",
};

function page({}: Props) {
  return (
    <>
      <AppPageBar title="Sm Manila"></AppPageBar>
      <Container>
        <Grid container>
          <Grid mt={3} xs={12}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default page;
