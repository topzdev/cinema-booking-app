"use client";

import { pageRoutes } from "@/configs/pageRoutes";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

type Props = {};

const CinemaTheaterList = (props: Props) => {
  const params = useParams();
  const baseUrl = pageRoutes.cinemaManager.pages.view(
    params.cinema_id as string
  ).pages;

  const list = [
    {
      id: 3,
      created_at: "2023-10-10T11:11:02.000000Z",
      updated_at: "2023-10-10T11:11:02.000000Z",
      deleted_at: null,
      name: "Hello World Test",
      description: "Hello World",
      row: 10,
      column: 10,
      cinema_id: 1,
      theater_type: "IMAX",
      seat_count: 86,
    },
    {
      id: 2,
      created_at: null,
      updated_at: "2023-10-10T11:12:16.000000Z",
      deleted_at: null,
      name: "Hello World Test",
      description: "Hello World",
      row: 10,
      column: 10,
      cinema_id: 1,
      theater_type_id: 1,
      theater_type: "2D",
      seat_count: 86,
    },
  ];

  const handleFloorPlan = (id: number) => {};
  const handleDelete = (id: number) => {};
  const handleUpdateInfo = (id: number) => {};
  const handleAddTheater = () => {};
  return (
    <Card variant="outlined">
      <CardHeader
        title="Theaters"
        action={
          <Button
            variant="contained"
            LinkComponent={Link}
            href={baseUrl.theater.add.href}
          >
            Add Theater
          </Button>
        }
      ></CardHeader>
      <CardContent>
        <List>
          {list.map((item, idx) => (
            <ListItem
              divider={idx < list.length - 1}
              disableGutters
              key={idx}
              secondaryAction={
                <Stack direction={"row"}>
                  <Button
                    size="medium"
                    color="inherit"
                    LinkComponent={Link}
                    href={baseUrl.theater.updateInfo(item.id).href}
                  >
                    Update Info
                  </Button>
                  <Button
                    size="medium"
                    color="inherit"
                    href={baseUrl.theater.floorPlan(item.id).href}
                  >
                    Floor Plan
                  </Button>
                  <Button
                    size="medium"
                    color="error"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </Stack>
              }
            >
              <ListItemText
                primary={<Typography variant="h6">{item.name}</Typography>}
                secondary={`${item.description} - ${item.seat_count} Seats - ${item.theater_type}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CinemaTheaterList;
