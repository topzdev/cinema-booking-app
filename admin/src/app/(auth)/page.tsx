"use client";

import apiServices from "@/apis";
import useAppAuth from "@/hooks/useAppAuth";
import Box from "@mui/material/Box";
import { getSession, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function HomePage() {
  const { data, status, update } = useSession();

  return (
    <Box sx={{ display: "flex" }}>
      <pre>{JSON.stringify(data)}</pre>
    </Box>
  );
}
