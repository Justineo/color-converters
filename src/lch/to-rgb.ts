import { Channels } from "../common";
import { assertHue } from "../assert";
import lchToLab from "./to-lab";
import labToRgb from "../lab/to-rgb";

export default function (lch: Channels): Channels {
  assertHue(lch[2]);

  return labToRgb(lchToLab(lch));
}
