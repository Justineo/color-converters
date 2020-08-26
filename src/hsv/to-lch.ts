import { Channels } from "../common";
import hsvToRgb from "./to-rgb";
import rgbToLch from "../rgb/to-lch";

export default function (hsv: Channels): Channels {
  return rgbToLch(hsvToRgb(hsv));
}
