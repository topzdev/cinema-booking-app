"use client";
import { pageRoutes } from "@/configs/pageRoutes";
import { useAppSelector } from "@/store";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {};

const CinemaInfoPreview = (props: Props) => {
  const params = useParams();
  const cinemaInfo = useAppSelector((state) => state.cinemaManager.cinema_info);

  const info = [
    {
      label: "Cinema Name",
      value: cinemaInfo.name,
    },
    {
      label: "Address",
      value: cinemaInfo.address,
    },

    {
      label: "Description",
      value: cinemaInfo.description,
    },
  ];

  return (
    <Card variant="outlined">
      <CardHeader title="Cinema Info"></CardHeader>
      <CardContent>
        <List>
          {info.map((item, idx) => (
            <ListItem disableGutters disablePadding key={idx}>
              <ListItemText primary={item.value} secondary={item.label} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button
          LinkComponent={Link}
          href={
            pageRoutes.cinemaManager.pages.edit(params.cinema_id as string).href
          }
          sx={{
            marginLeft: "auto",
          }}
        >
          Edit Info
        </Button>
      </CardActions>
    </Card>
  );
};

export default CinemaInfoPreview;
