import Timestamps from "./Timestamps";

type Cinema = {
  id: number;
  name: string;
  address: string;
  description: string;
} & Timestamps;

export default Cinema;
