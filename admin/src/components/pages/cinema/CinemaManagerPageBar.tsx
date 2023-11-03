"use client";
import AppPageBar from "@/components/layout/AppPageBar";
import { useAppSelector } from "@/store";
import React from "react";

type Props = {};

const CinemaManagerPageBar = (props: Props) => {
  const cinemaInfo = useAppSelector((state) => state.cinemaManager.cinema_info);
  return <AppPageBar title={cinemaInfo.name}></AppPageBar>;
};

export default CinemaManagerPageBar;
