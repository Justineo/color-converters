import { assertConvert, assertThrow } from "./common";
import { RGB_VALUES } from "./data";
import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  rgbToHsv,
  rgbToLab,
  rgbToLch,
} from "../src/index";
import { rgb, hsl, lab, lch } from "d3-color";
import { hsv } from "d3-hsv";
import { Channels } from "../src/common";

test("hex: to rgb", () => {
  assertThrow(hexToRgb, [
    "123",
    "#12345",
    "#1234567",
    "#123456789",
    "#4183c488",
  ]);

  assertConvert(hexToRgb, [
    ["#000", [0, 0, 0]],
    ["#333", [51, 51, 51]],
    ["#4183c4", [65, 131, 196]],
  ]);
});

test("rgb: to hex", () => {
  assertThrow(rgbToHex, [
    [-1, 0, 0],
    [256, 0, 0],
  ]);

  assertConvert(rgbToHex, [
    [[0, 0, 0], "#000000"],
    [[51, 51, 51], "#333333"],
    [[65, 131, 196], "#4183c4"],
  ]);
});

test("rgb: to hsl", () => {
  assertThrow(rgbToHsl, [
    [-1, 0, 0],
    [256, 0, 0],
  ]);

  assertConvert(
    rgbToHsl,
    RGB_VALUES.map((val) => {
      const { h, s, l } = hsl(rgb(...val));
      return [val, [isNaN(h) ? 0 : h, isNaN(s) ? 0 : s, l]];
    })
  );
});

test("rgb: to hsv", () => {
  assertThrow(rgbToHsv, [
    [-1, 0, 0],
    [256, 0, 0],
  ]);

  assertConvert(
    rgbToHsv,
    RGB_VALUES.map((val) => {
      const { h, s, v } = hsv(rgb(...val));
      return [
        // d3-hsv round rgb channels so make some compromise here
        val.map(Math.round) as Channels,
        [isNaN(h) ? 0 : h, isNaN(s) ? 0 : s, v],
      ];
    })
  );
});

test("rgb: to lab", () => {
  assertThrow(rgbToLab, [
    [-1, 0, 0],
    [256, 0, 0],
  ]);

  assertConvert(
    rgbToLab,
    RGB_VALUES.map((val) => {
      const { l, a, b } = lab(rgb(...val));
      return [val, [l, a, b]];
    })
  );
});

test("rgb: to lch", () => {
  assertThrow(rgbToLch, [
    [-1, 0, 0],
    [256, 0, 0],
  ]);

  assertConvert(
    rgbToLch,
    RGB_VALUES.map((val) => {
      const { l, c, h } = lch(rgb(...val));
      return [val, [l, isNaN(c) ? 0 : c, isNaN(h) ? 0 : h]];
    })
  );
});
