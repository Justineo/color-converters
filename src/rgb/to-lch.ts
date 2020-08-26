import { Channels } from "../common";
import rgbToLab from "./to-lab";
import labToLch from "../lab/to-lch";

export default function (rgb: Channels): Channels {
  return labToLch(rgbToLab(rgb));
}
