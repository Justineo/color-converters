# Color converters

Modular color converters.

## Installation

```bash
npm i -save color-converters
```

## Usage

```js
import { rgbToLch } from 'color-converters'

console.log(rgbToLch([128, 64, 192]))
// [ 40.69258402616329, 73.62226037144089, 308.8993602683097 ]
```

## Supported color spaces and converters

* RGB (sRGB, 0–255)

  * `rgbToHex: (rgb: [number, number, number]) => string`
  * `hexToRgb: (hex: string) => [number, number, number]`
  * `rgbToHsl: (rgb: [number, number, number]) => [number, number, number]`
  * `rgbToHsv: (rgb: [number, number, number]) => [number, number, number]`
  * `rgbToLab: (rgb: [number, number, number]) => [number, number, number]`
  * `rgbToLch: (rgb: [number, number, number]) => [number, number, number]`

* HSL

  * `hslToRgb: (hsl: [number, number, number]) => [number, number, number]`
  * `hslToHsv: (hsl: [number, number, number]) => [number, number, number]`
  * `hslToLab: (hsl: [number, number, number]) => [number, number, number]`
  * `hslToLch: (hsl: [number, number, number]) => [number, number, number]`

* HSV

  * `hsvToRgb: (hsv: [number, number, number]) => [number, number, number]`
  * `hsvToHsl: (hsv: [number, number, number]) => [number, number, number]`
  * `hsvToLab: (hsv: [number, number, number]) => [number, number, number]`
  * `hsvToLch: (hsv: [number, number, number]) => [number, number, number]`

* Lab (CIE L\*a\*b\*)

  * `labToRgb: (lab: [number, number, number]) => [number, number, number]`
  * `labToHsl: (lab: [number, number, number]) => [number, number, number]`
  * `labToHsv: (lab: [number, number, number]) => [number, number, number]`
  * `labToLch: (lab: [number, number, number]) => [number, number, number]`

* LCH<sub>ab</sub>

  * `lchToRgb: (lch: [number, number, number]) => [number, number, number]`
  * `lchToHsl: (lch: [number, number, number]) => [number, number, number]`
  * `lchToHsv: (lch: [number, number, number]) => [number, number, number]`
  * `lchToLab: (lch: [number, number, number]) => [number, number, number]`
