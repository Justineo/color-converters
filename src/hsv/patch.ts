import { Channels } from "../common";
import { ε } from "../common";

export function patchHsv([h, s, v]: Channels): Channels {
  if (s < ε) {
    h = s = 0;
  }

  if (v < ε) {
    h = s = 0;
  }

  return [h, s, v];
}
