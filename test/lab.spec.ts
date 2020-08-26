import { assertConvert, assertThrow } from "./common";
import { LAB_VALUES } from "./data";
import { labToRgb, labToHsl, labToHsv, labToLch } from "../src/index";
import { clampRgb } from "../src/common";
import { patchHsl } from "../src/hsl/patch";
import { patchHsv } from "../src/hsv/patch";
import { rgb, hsl, lab, lch } from "d3-color";
import { hsv } from "d3-hsv";

test("lab: to rgb", () => {
  assertThrow(labToRgb, [[-1, 0, 0]]);

  assertConvert(
    labToRgb,
    LAB_VALUES.map((val) => {
      const { r, g, b } = rgb(lab(...val));
      return [val, clampRgb([r, g, b])];
    })
  );
});

test("lab: to hsl", () => {
  assertThrow(labToHsl, [[-1, 0, 0]]);

  assertConvert(
    labToHsl,
    LAB_VALUES.map((val) => {
      const { r, g, b } = rgb(lab(...val));
      // compare after clamping rgb channels to [0, 255]
      // otherwise it'll be meaning less
      const { h, s, l } = hsl(rgb(...clampRgb([r, g, b])));
      return [val, patchHsl([isNaN(h) ? 0 : h, isNaN(s) ? 0 : s, l])];
    })
  );
});

test("lab: to hsv", () => {
  assertThrow(labToHsv, [[-1, 0, 0]]);

  assertConvert(
    labToHsv,
    LAB_VALUES.map((val) => {
      const { r, g, b } = rgb(lab(...val));
      // compare after clamping rgb channels to [0, 255]
      // otherwise it'll be meaning less
      const { h, s, v } = hsv(rgb(...clampRgb([r, g, b])));
      return [val, patchHsv([isNaN(h) ? 0 : h, isNaN(s) ? 0 : s, v])];
    }),
    [1.5, 0.01, 0.01]
  );
});

test("lab: to lch", () => {
  assertThrow(labToLch, [[-1, 0, 0]]);

  assertConvert(
    labToLch,
    LAB_VALUES.map((val) => {
      const { l, c, h } = lch(lab(...val));
      return [val, [l, isNaN(c) ? 0 : c, isNaN(h) ? 0 : h]];
    })
  );
});
