import { Channels } from "../common";
import { assertHue, assertUnit } from "../assert";

export default function ([h, s, l]: Channels): Channels {
  assertHue(h);
  assertUnit(s, "satuation");
  assertUnit(l, "lightness");

  // https://www.w3.org/TR/css-color-4/#hsl-to-rgb
  const t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
  const t1 = l * 2 - t2;
  const r = hueToRgb(t1, t2, h + 120);
  const g = hueToRgb(t1, t2, h);
  const b = hueToRgb(t1, t2, h - 120);

  return [r * 255, g * 255, b * 255];
}

function hueToRgb(t1: number, t2: number, h: number): number {
  h = (h + 360) % 360;

  if (h < 60) {
    return ((t2 - t1) * h) / 60 + t1;
  } else if (h < 180) {
    return t2;
  } else if (h < 240) {
    return ((t2 - t1) * (240 - h)) / 60 + t1;
  } else {
    return t1;
  }
}
