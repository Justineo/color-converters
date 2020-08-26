import { Channels } from "../common";
import labToRgb from "./to-rgb";
import rgbToHsv from "../rgb/to-hsv";

export default function (lab: Channels): Channels {
  return rgbToHsv(labToRgb(lab));
}
