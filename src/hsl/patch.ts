import { Channels } from "../common";
import { ε } from "../common";

export function patchHsl([h, s, l]: Channels): Channels {
  if (s < ε) {
    h = s = 0;
  }
  if (l < ε) {
    h = s = l = 0;
  } else if (1 - l < ε) {
    l = 1;
    h = s = 0;
  }
  return [h, s, l];
}
