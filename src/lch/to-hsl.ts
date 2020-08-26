import { Channels } from "../common";
import lchToRgb from "./to-rgb";
import rgbToHsl from "../rgb/to-hsl";
import { assertHue } from "../assert";

export default function (lch: Channels): Channels {
  assertHue(lch[2]);

  return rgbToHsl(lchToRgb(lch));
}
