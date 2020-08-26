import { Channels } from "../common";
import hsvToRgb from "./to-rgb";
import rgbToLab from "../rgb/to-lab";

export default function (hsv: Channels): Channels {
  return rgbToLab(hsvToRgb(hsv));
}
