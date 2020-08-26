import { Channels } from "../common";
import { assertRange } from "./assert";
import { patchHsl } from "../hsl/patch";

export default function (rgb: Channels): Channels {
  assertRange(rgb);

  const [r, g, b] = rgb.map((ch) => ch / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;
  const sum = max + min;

  let h;
  let s;
  const l = sum / 2;

  if (max === min) {
    h = 0;
  } else if (max === r && g >= b) {
    h = (60 * (g - b)) / diff + 0;
  } else if (max === r && g < b) {
    h = (60 * (g - b)) / diff + 360;
  } else if (max === g) {
    h = (60 * (b - r)) / diff + 120;
  } else {
    // max === b
    h = (60 * (r - g)) / diff + 240;
  }

  if (l === 0 || max === min) {
    s = 0;
  } else if (0 < l && l <= 0.5) {
    s = diff / sum;
  } else {
    // l > 0.5
    s = diff / (2 - sum);
  }

  return patchHsl([h, s, l]);
}
