import { Channels } from "../common";
import { assertRange } from "./assert";
import { patchHsv } from "../hsv/patch";

export default function (rgb: Channels): Channels {
  assertRange(rgb);

  const [r, g, b] = rgb.map((ch) => ch / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  let h;
  let s;

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

  if (max === 0) {
    s = 0;
  } else {
    s = diff / max;
  }

  const v = max;
  return patchHsv([h, s, v]);
}
