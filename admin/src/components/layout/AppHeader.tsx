import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";

type Props = {};

const AppHeader = (props: Props) => {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      // variant="outlined"
      sx={{ zIndex: 2000 }}
    >
      <Toolbar sx={{ backgroundColor: "background.primary" }}>
        <DashboardIcon sx={{ mr: 2, transform: "translateY(-2px)" }} />
        <Typography variant="h6" noWrap component="div">
          Sinefy Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
