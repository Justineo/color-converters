/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
import { Channels } from "../src/common";

type ChannelsEpsilon = number | Channels;

declare global {
  namespace jest {
    interface Matchers<R> {
      toAlmostEqual(expected: Channels, ε?: ChannelsEpsilon): R;
    }
  }
}

const { abs } = Math;
expect.extend({
  toAlmostEqual(
    received: Channels,
    expected: Channels,
    ε: ChannelsEpsilon = 0.01
  ) {
    if (typeof ε === "number") {
      ε = [ε, ε, ε];
    }

    const pass =
      abs(received[0] - expected[0]) < ε[0] &&
      abs(received[1] - expected[1]) < ε[1] &&
      abs(received[2] - expected[2]) < ε[2];

    return {
      pass,
      message: () =>
        `expected ${JSON.stringify(received)} to${
          pass ? " not" : ""
        } be almost equal to ${JSON.stringify(expected)}`,
    };
  },
});

export type Convertable = string | Channels;
// export type ChannelsConverter = (from: Channels) => Channels;
export type Converter = (from: Convertable) => Convertable;

export function assertThrow(
  convert: Function,
  invalidValues: Convertable[]
): void {
  const convertFn = convert as Converter;
  invalidValues.forEach((val) => {
    expect(() => convertFn(val)).toThrow();
  });
}

export function assertConvert(
  convert: Function,
  cases: [Convertable, Convertable][],
  ε: ChannelsEpsilon = 0.01
): void {
  const convertFn = convert as Converter;
  cases.forEach(([from, to]) => {
    if (typeof to === "string") {
      expect(convertFn(from)).toEqual(to);
    } else {
      expect(convertFn(from)).toAlmostEqual(to, ε);
    }
  });
}
