import { assertConvert, assertThrow } from "./common";
import { HSL_VALUES } from "./data";
import { hslToRgb, hslToHsv, hslToLab, hslToLch } from "../src/index";
import { rgb, hsl, lab, lch } from "d3-color";
import { hsv } from "d3-hsv";

test("hsl: to rgb", () => {
  assertThrow(hslToRgb, [
    [-1, 0, 0],
    [361, 0, 0],
    [0, 2, 0],
    [0, 0, -1],
  ]);

  assertConvert(
    hslToRgb,
    HSL_VALUES.map((val) => {
      const { r, g, b } = rgb(hsl(...val));
      return [val, [r, g, b]];
    })
  );
});

test("hsl: to hsv", () => {
  assertThrow(hslToHsv, [
    [-1, 0, 0],
    [361, 0, 0],
    [0, 2, 0],
    [0, 0, -1],
  ]);

  assertConvert(
    hslToHsv,
    HSL_VALUES.map((val) => {
      const { h, s, v } = hsv(hsl(...val));
      return [val, [isNaN(h) ? 0 : h, isNaN(s) ? 0 : s, v]];
    }),
    // d3-color convert hsl to rgb first so precision is lost
    // so relax precision for comparison here
    [0.6, 0.01, 0.01]
  );
});

test("hsl: to lab", () => {
  assertThrow(hslToLab, [
    [-1, 0, 0],
    [361, 0, 0],
    [0, 2, 0],
    [0, 0, -1],
  ]);

  assertConvert(
    hslToLab,
    HSL_VALUES.map((val) => {
      const { l, a, b } = lab(hsl(...val));
      return [val, [l, a, b]];
    })
  );
});

test("hsl: to lch", () => {
  assertThrow(hslToLch, [
    [-1, 0, 0],
    [361, 0, 0],
    [0, 2, 0],
    [0, 0, -1],
  ]);

  assertConvert(
    hslToLch,
    HSL_VALUES.map((val) => {
      const { l, c, h } = lch(hsl(...val));
      return [val, [l, isNaN(c) ? 0 : c, isNaN(h) ? 0 : h]];
    })
  );
});
