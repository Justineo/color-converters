export type Channels = [number, number, number];

export const ε = 1e-6;

function clamp(val: number, max: number, min = 0): number {
  return Math.min(Math.max(val, min), max);
}

export function clampRgb(rgb: Channels): Channels {
  return rgb.map((ch) => clamp(ch, 255)) as Channels;
}
