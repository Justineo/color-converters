import { Channels } from "../common";
import hslToRgb from "./to-rgb";
import rgbToLab from "../rgb/to-lab";

export default function (hsl: Channels): Channels {
  return rgbToLab(hslToRgb(hsl));
}
