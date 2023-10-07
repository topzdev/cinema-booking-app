"use client";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

import { DRAWER_WIDTH } from "@/configs";
import useAppAuth from "@/hooks/useAppAuth";
import CameraIndoorIcon from "@mui/icons-material/CameraIndoor";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import MovieIcon from "@mui/icons-material/Movie";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import TheatersIcon from "@mui/icons-material/Theaters";
import { signOut } from "next-auth/react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import React from "react";
import Typography from "@mui/material/Typography";
type Props = {};

const LINKS = [
  { text: "Dashboard", href: "/", icon: HomeIcon },
  { text: "Cinema", href: "/cinema", icon: CameraIndoorIcon },
  { text: "Theater", href: "/theater", icon: TheatersIcon },
  { text: "Movie", href: "/movie", icon: MovieIcon },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  {
    text: "Logout",
    icon: LogoutIcon,
    action: async () => {
      await signOut();
    },
  },
];

const AppDrawer = (props: Props) => {
  const { user } = useAppAuth();

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          top: ["48px", "56px", "64px"],
          height: "auto",
          bottom: 0,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Divider />
      <List>
        {LINKS.map(({ text, href, icon: Icon }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton component={Link} href={href}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mt: "auto" }} />
      <List>
        {user && (
          <ListItem>
            <ListItemAvatar>
              <Avatar>{user.initials}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.full_name} />
          </ListItem>
        )}
        {PLACEHOLDER_LINKS.map(({ text, action, icon: Icon }) => (
          <ListItem key={text} onClick={action} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AppDrawer;
