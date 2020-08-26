import { Channels } from "../common";
import labToRgb from "./to-rgb";
import rgbToHsl from "../rgb/to-hsl";

export default function (lab: Channels): Channels {
  return rgbToHsl(labToRgb(lab));
}
