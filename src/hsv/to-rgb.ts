import { Channels } from "../common";
import { assertHue, assertUnit } from "../assert";

const { floor } = Math;

export default function ([h, s, v]: Channels): Channels {
  assertHue(h);
  assertUnit(s, "satuation");
  assertUnit(v, "value");

  const hi = floor(h / 60);
  const f = h / 60 - hi;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  let rgb1: Channels;

  switch (hi) {
    case 0:
      rgb1 = [v, t, p];
      break;
    case 1:
      rgb1 = [q, v, p];
      break;
    case 2:
      rgb1 = [p, v, t];
      break;
    case 3:
      rgb1 = [p, q, v];
      break;
    case 4:
      rgb1 = [t, p, v];
      break;
    case 5:
      rgb1 = [v, p, q];
      break;
    default:
      rgb1 = [0, 0, 0];
  }

  return rgb1.map((ch) => ch * 255) as Channels;
}
