import Cinema from "./Cinema";
import TheaterType from "./TheaterType";
import Timestamps from "./Timestamps";

type Theater = {
  id: number;
  name: string;
  description: string;
  row: number;
  column: number;
  cinema_id: number;
  theater_type_id: number;
  cinema?: Cinema | null;
  theater_type: TheaterType;
} & Timestamps;

export default Theater;
