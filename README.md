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

## Why another color library?

Existing color manipulation libraries like [`color`](https://www.npmjs.com/package/color), [`TinyColor`](http://bgrins.github.io/TinyColor/), [`Chroma.js`](https://vis4.net/chromajs/) and [`d3-color`](https://www.npmjs.com/package/d3-color) are powerful enough but are bundled with all functionalities together to support a “jQuery like” API. While sometimes we only need simple conversion among two or three color spaces. This library provides a bunch of color conversion functions which are fully treeshakable, no formatting, no manipulation, no color palette generation.
