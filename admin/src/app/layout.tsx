import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import MuiSnackbarProvider from "@/components/providers/SnackbarProvider";
import MuiConfirmProvider from "@/components/providers/MUIConfirmProvider";
import AuthProvider from "@/components/providers/AuthProvider";
import ReduxProvider from "@/components/providers/ReduxProvider";

export const metadata = {
  title: {
    template: "%s | Sinefy Admin",
    default: "Sinefy Admin",
  },
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
                <AuthProvider>
                  <ReduxProvider>{children}</ReduxProvider>
                </AuthProvider>
              </ReactQueryProvider>
            </MuiSnackbarProvider>
          </MuiConfirmProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
