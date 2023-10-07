import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import MuiSnackbarProvider from "@/components/providers/SnackbarProvider";
import MuiConfirmProvider from "@/components/providers/MUIConfirmProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";

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
              <ReactQueryProvider>
                <AuthProvider>{children}</AuthProvider>
              </ReactQueryProvider>
            </MuiSnackbarProvider>
          </MuiConfirmProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
