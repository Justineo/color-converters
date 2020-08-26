import { Channels } from "../common";

const hexRe = /^#(?:[0-9a-f]{3}){1,2}$/i;

export default function (hex: string): Channels {
  if (!hexRe.test(hex)) {
    throw new Error(`Invalid format for hex color value: ${hex}`);
  }

  let val = hex.slice(1);

  if (val.length === 3) {
    val = val
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const num = parseInt(val, 16);

  return [num >> 16, (num >> 8) & 255, num & 255];
}
