import { Channels } from "../common";

export function assertRange(val: number | Channels): void {
  let pass;
  if (typeof val === "number") {
    pass = 0 <= val && val <= 255;
  } else {
    pass = val.every((v) => 0 <= v && v <= 255);
  }
  if (!pass) {
    throw new RangeError("RGB channel value shoud be in range [0, 255].");
  }
}
