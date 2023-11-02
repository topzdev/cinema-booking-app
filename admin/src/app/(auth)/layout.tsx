import AppDrawer from "@/components/layout/AppDrawer";
import AppHeader from "@/components/layout/AppHeader";
import { DRAWER_WIDTH } from "@/configs";
import Box from "@mui/material/Box";
import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Cinema Manager",
    default: "Cinema Manager",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader />
      <AppDrawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          ml: `${DRAWER_WIDTH}px`,
          mt: ["48px", "56px", "64px"],
        }}
      >
        {children}
      </Box>
    </>
  );
}
