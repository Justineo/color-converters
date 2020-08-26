import { Channels } from "../common";
import { assertRange } from "./assert";

const { round } = Math;

export default function (rgb: Channels): string {
  return "#" + rgb.map(convert).join("");
}

function convert(ch: number): string {
  assertRange(ch);

  const str = round(ch).toString(16);
  return str.length == 1 ? `0${str}` : str;
}
