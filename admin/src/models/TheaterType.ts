import Timestamps from "./Timestamps";

type TheaterType = {
  id: number;
  title: string;
  description: string;
} & Timestamps;

export default TheaterType;
