import { Channels } from "../common";
import lchToRgb from "./to-rgb";
import rgbToHsv from "../rgb/to-hsv";
import { assertHue } from "../assert";

export default function (lch: Channels): Channels {
  assertHue(lch[2]);

  return rgbToHsv(lchToRgb(lch));
}
