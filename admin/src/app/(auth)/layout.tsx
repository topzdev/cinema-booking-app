import AppDrawer, { DRAWER_WIDTH } from "@/components/layout/AppDrawer";
import AppHeader from "@/components/layout/AppHeader";
import Box from "@mui/material/Box";
import * as React from "react";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
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
