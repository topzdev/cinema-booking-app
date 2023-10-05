import * as React from "react";
import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import AppHeader from "@/components/layout/AppHeader";
import AppDrawer, { DRAWER_WIDTH } from "@/components/layout/AppDrawer";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import MuiSnackbarProvider from "@/components/providers/SnackbarProvider";
import MuiConfirmProvider from "@/components/providers/MUIConfirmProvider";

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
    <html lang="en">
      <body>
        <ThemeRegistry>
          <MuiConfirmProvider>
            <MuiSnackbarProvider>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </MuiSnackbarProvider>
          </MuiConfirmProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
