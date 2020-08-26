import { Channels } from "../common";
import { assertHue, assertUnit } from "../assert";
import { patchHsl } from "../hsl/patch";

export default function ([h, s, v]: Channels): Channels {
  assertHue(h);
  assertUnit(s, "satuation");
  assertUnit(v, "value");

  let l = (2 - s) * v;
  let sl = s * v;
  sl /= l <= 1 ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return patchHsl([h, sl, l]);
}
