import { Channels } from "../common";
import { assertRange } from "./assert";
import { ε, κ, white } from "../lab/consts";

const { pow, cbrt } = Math;

export default function (rgb: Channels): Channels {
  assertRange(rgb);

  return xyz50toLab(toXyz50(rgb));
}

function toXyz50(rgb: Channels): Channels {
  const [r, g, b] = toLrgb(rgb);

  /**
   * Convert linear sRGB to XYZ. Instead of linear sRGB -> XYZ D65 -> XYZ D50,
   * we use linear sRGB -> XYZ D50 to calculate faster.
   * See https://www.w3.org/TR/css-color-4/#color-conversion-code
   * See http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
   */
  return [
    0.4360747 * r + 0.3850649 * g + 0.1430804 * b,
    0.2225045 * r + 0.7168786 * g + 0.0606169 * b,
    0.0139322 * r + 0.0971045 * g + 0.7141733 * b,
  ];
}

function toLrgb(rgb: Channels): Channels {
  return rgb.map((ch) => {
    const val = ch / 255;

    if (val < 0.04045) {
      return val / 12.92;
    }

    return pow((val + 0.055) / 1.055, 2.4);
  }) as Channels;
}

// See https://www.w3.org/TR/css-color-4/#color-conversion-code
function xyz50toLab(xyz: Channels): Channels {
  // compute xyz, which is XYZ scaled relative to reference white
  const scaledXyz = xyz.map((val, i) => val / white[i]);

  const f = scaledXyz.map((val) =>
    val > ε ? cbrt(val) : (κ * val + 16) / 116
  );

  return [
    116 * f[1] - 16, // L
    500 * (f[0] - f[1]), // a
    200 * (f[1] - f[2]), // b
  ];
}
