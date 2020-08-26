import { Channels } from "../common";
import { assertCIELightness } from "../assert";

const { atan2, PI, sqrt, pow } = Math;

export default function ([l, a, b]: Channels): Channels {
  assertCIELightness(l);

  const h = (atan2(b, a) * 180) / PI;
  return [
    l, // L is still L
    sqrt(pow(a, 2) + pow(b, 2)), // Chroma
    h >= 0 ? h : h + 360, // hue, in degrees [0 to 360)
  ];
}
