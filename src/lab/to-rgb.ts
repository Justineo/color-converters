import { Channels, clampRgb } from "../common";
import { assertCIELightness } from "../assert";
import { ε, κ, white } from "./consts";

const { pow } = Math;

export default function (lab: Channels): Channels {
  assertCIELightness(lab[0]);

  return clampRgb(lrgbToRgb(xyz50toLrgb(toXyz50(lab))));
}

function toXyz50([l, a, b]: Channels): Channels {
  // compute f, starting with the luminance-related term
  const f1 = (l + 16) / 116;
  const f0 = a / 500 + f1;
  const f2 = f1 - b / 200;

  // compute xyz
  const xyz = [
    pow(f0, 3) > ε ? pow(f0, 3) : (116 * f0 - 16) / κ,
    l > κ * ε ? pow((l + 16) / 116, 3) : l / κ,
    pow(f2, 3) > ε ? pow(f2, 3) : (116 * f2 - 16) / κ,
  ];

  // Compute XYZ by scaling xyz by reference white
  return xyz.map((val, i) => val * white[i]) as Channels;
}

function xyz50toLrgb([x, y, z]: Channels): Channels {
  return [
    3.1338561 * x + -1.6168667 * y + -0.4906146 * z,
    -0.9787684 * x + 1.9161415 * y + 0.033454 * z,
    0.0719453 * x + -0.2289914 * y + 1.4052427 * z,
  ];
}

function lrgbToRgb(rgb: Channels): Channels {
  return rgb.map(
    (val) =>
      (val > 0.0031308 ? 1.055 * pow(val, 1 / 2.4) - 0.055 : 12.92 * val) * 255
  ) as Channels;
}
