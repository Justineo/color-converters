import { Channels } from "../common";
import hslToRgb from "./to-rgb";
import rgbToLch from "../rgb/to-lch";

export default function (hsl: Channels): Channels {
  return rgbToLch(hslToRgb(hsl));
}
