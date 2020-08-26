import { Channels } from "../common";
import { assertHue } from "../assert";

const { cos, sin, PI } = Math;

export default function ([l, c, h]: Channels): Channels {
  assertHue(h);

  return [
    l, // L is still L
    c * cos((h * PI) / 180), // a
    c * sin((h * PI) / 180), // b
  ];
}
