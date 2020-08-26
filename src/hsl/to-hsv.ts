import { Channels } from "../common";
import { assertHue, assertUnit } from "../assert";
import { patchHsv } from "../hsv/patch";

const { min } = Math;

export default function ([h, s, l]: Channels): Channels {
  assertHue(h);
  assertUnit(s, "satuation");
  assertUnit(l, "lightness");

  const hv = h;
  const v = l + s * min(l, 1 - l);
  const sv = v === 0 ? 0 : 2 * (1 - l / v);

  return patchHsv([hv, sv, v]);
}
