import { assertConvert, assertThrow } from "./common";
import { HSV_VALUES } from "./data";
import { hsvToRgb, hsvToHsl, hsvToLab, hsvToLch } from "../src/index";
import { rgb, hsl, lab, lch } from "d3-color";
import { hsv } from "d3-hsv";
import { Channels } from "../src/common";

test("hsv: to rgb", () => {
  assertThrow(hsvToRgb, [
    [-1, 0, 0],
    [361, 0, 0],
    [0, 2, 0],
    [0, 0, -1],
  ]);

  assertConvert(
    // d3-hsv round rgb channels so make some compromise here
    (val: Channels) => hsvToRgb(val).map(Math.round),
    HSV_VALUES.map((val) => {
      const { r, g, b } = rgb(hsv(...val));
      return [val, [r, g, b]];
    })
  );
});

test("hsv: to hsl", () => {
  assertThrow(hsvToHsl, [
    [-1, 0, 0],
    [361, 0, 0],
    [0, 2, 0],
    [0, 0, -1],
  ]);

  assertConvert(
    hsvToHsl,
    HSV_VALUES.map((val) => {
      const { h, s, l } = hsl(hsv(...val));
      return [val, [isNaN(h) ? 0 : h, isNaN(s) ? 0 : s, isNaN(l) ? 0 : l]];
    }),
    // d3-color convert hsl to rgb first so precision is lost
    // so relax precision for comparison here
    [0.6, 0.01, 0.01]
  );
});

test("hsv: to lab", () => {
  assertThrow(hsvToLab, [
    [-1, 0, 0],
    [361, 0, 0],
    [0, 2, 0],
    [0, 0, -1],
  ]);

  assertConvert(
    hsvToLab,
    HSV_VALUES.map((val) => {
      const { l, a, b } = lab(hsv(...val));
      return [val, [l, a, b]];
    }),
    // d3-color convert hsl to rgb first so precision is lost
    // so relax precision for comparison here
    [0.6, 0.5, 0.5]
  );
});

test("hsv: to lch", () => {
  assertThrow(hsvToLch, [
    [-1, 0, 0],
    [361, 0, 0],
    [0, 2, 0],
    [0, 0, -1],
  ]);

  assertConvert(
    hsvToLch,
    HSV_VALUES.map((val) => {
      const { l, c, h } = lch(hsv(...val));
      return [val, [l, isNaN(c) ? 0 : c, isNaN(h) ? 0 : h]];
    }),
    // d3-color convert hsl to rgb first so precision is lost
    // so relax precision for comparison here
    [0.6, 0.5, 0.5]
  );
});
