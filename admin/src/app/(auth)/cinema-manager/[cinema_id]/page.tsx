import { RootState, useAppSelector } from "@/store";
import AppPageBar from "@/components/layout/AppPageBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { Metadata } from "next";
import { useSelector } from "react-redux";

type Props = {};

export const metadata: Metadata = {
  title: "Sm Manila",
};

function page({}: Props) {
  // const count = useAppSelector((state) => state.counter.value);

  return (
    <>
      <AppPageBar title="Sm Manila"></AppPageBar>
      <Container>
        <Grid container>
          <Grid mt={3} xs={12}>
            {/* {count} */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default page;
