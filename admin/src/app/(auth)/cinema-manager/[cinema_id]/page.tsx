import CinemaInfoPreview from "@/components/pages/cinema/CinemaInfoPreview";
import CinemaManagerPageBar from "@/components/pages/cinema/CinemaManagerPageBar";
import CinemaTheaterList from "@/components/pages/cinema/CinemaTheaterList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Sm Manila",
};

function page({}: Props) {
  return (
    <>
      <CinemaManagerPageBar />
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid xs={5}>
            <CinemaInfoPreview />
          </Grid>
          <Grid xs={7}>
            <CinemaTheaterList />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default page;
