export function assertHue(val: number): void {
  if (val < 0 || val >= 360) {
    throw new RangeError("Hue channel value shoud be in range [0, 360).");
  }
}

export function assertUnit(val: number, channelName: string): void {
  if (val < 0 || val > 1) {
    throw new RangeError(
      `${upperFirst(channelName)} channel value shoud be in range [0, 1].`
    );
  }
}

function upperFirst(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function assertCIELightness(val: number): void {
  if (val < 0) {
    throw new RangeError(`CIE lightness channel value shoud be positive.`);
  }
}
