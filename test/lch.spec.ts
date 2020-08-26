import { assertConvert, assertThrow } from "./common";
import { LCH_VALUES } from "./data";
import { lchToRgb, lchToHsl, lchToHsv, lchToLab } from "../src/index";
import { clampRgb } from "../src/common";
import { patchHsl } from "../src/hsl/patch";
import { patchHsv } from "../src/hsv/patch";
import { rgb, hsl, lab, lch } from "d3-color";
import { hsv } from "d3-hsv";

test("lch: to rgb", () => {
  assertThrow(lchToRgb, [
    [0, 0, 360],
    [0, 0, -1],
  ]);

  assertConvert(
    lchToRgb,
    LCH_VALUES.map((val) => {
      const { r, g, b } = rgb(lch(...val));
      return [val, clampRgb([r, g, b])];
    })
  );
});

test("lch: to hsl", () => {
  assertThrow(lchToHsl, [
    [0, 0, 360],
    [0, 0, -1],
  ]);

  assertConvert(
    lchToHsl,
    LCH_VALUES.map((val) => {
      const { r, g, b } = rgb(lch(...val));
      // compare after clamping rgb channels to [0, 255]
      // otherwise it'll be meaning less
      const { h, s, l } = hsl(rgb(...clampRgb([r, g, b])));
      return [val, patchHsl([isNaN(h) ? 0 : h, isNaN(s) ? 0 : s, l])];
    })
  );
});

test("lch: to hsv", () => {
  assertThrow(lchToHsv, [
    [0, 0, 360],
    [0, 0, -1],
  ]);

  assertConvert(
    lchToHsv,
    LCH_VALUES.map((val) => {
      const { r, g, b } = rgb(lch(...val));
      // compare after clamping rgb channels to [0, 255]
      // otherwise it'll be meaning less
      const { h, s, v } = hsv(rgb(...clampRgb([r, g, b])));
      return [val, patchHsv([isNaN(h) ? 0 : h, isNaN(s) ? 0 : s, v])];
    }),
    [1.5, 0.01, 0.01]
  );
});

test("lch: to lab", () => {
  assertThrow(lchToLab, [
    [0, 0, 360],
    [0, 0, -1],
  ]);

  assertConvert(
    lchToLab,
    LCH_VALUES.map((val) => {
      const { l, a, b } = lab(lch(...val));
      return [val, [l, a, b]];
    })
  );
});
