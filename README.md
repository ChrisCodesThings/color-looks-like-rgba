# color-looks-like-rgba <br> [![Test workflow status](https://github.com/ChrisCodesThings/color-looks-like-rgba/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/color-looks-like-rgba)](https://www.npmjs.com/package/@chriscodesthings/color-looks-like-rgba) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Determine if a set of values could be an RGB or RGBA color**

## Description

Function to determine if a given set of values *could be* an RGBA color. 

The reason we can only say 'looks like', is because it's impossible to be sure. 

### Consider these examples:

Black - this is the only colour that works for both formats:

```
[0, 0, 0, 1] // RGBA
[0, 0, 0, 1] // HSL
```

White in HSL turns into dark green as RGB but both are valid
```
[0, 0, 100, 1] // White as HSL
```

A nice orange colour in HSL turns green as RGB, while brown as RGB turns green as HSL!

As you can see, while there are differences in the allowed range for each value, there is also a lot of crossover which produce very different colours. 

### See...
- [Install/Usage](#install "Install and Usage")
- [Types](#types "Types")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/color-looks-like-rgba
```

## Usage

```js
import colorLooksLikeRGBA from '@chriscodesthings/color-looks-like-rgba';

console.log(colorLooksLikeRGBA([100, 149, 237, 1])); // cornflowerblue
// => true
```

## Types

This package uses types from:
- [**basic-color-types**: Defines named types for common color formats](https://github.com/ChrisCodesThings/basic-color-types "Defines named types for common color formats")

## Syntax

```js
colorLooksLikeRGBA([r, g, b, (a)]);
```

### Parameters

- *r, g, b*: red, green and blue values in the range 0-255
- *a* (optional): alpha value in the range 0-1

### Returns

Returns `true` if the values could be an RGBA color, `false` otherwise.

## Examples

```js
// called when some input changes
function setNewColour(r, g, b, a) {
    if( !colorLooksLikeRGBA[r, g, b, a]) {
        return;
    }

    // do something
}
```

## See Also...

- [**color-object** - Simple, lightweight class to store and manipulate a color, and convert between formats](https://github.com/ChrisCodesThings/color-object "Simple, lightweight class to store and manipulate a color, and convert between formats")
- [**is-css-hex-color** - Determine if a string is a CSS hex color code](https://github.com/ChrisCodesThings/is-css-hex-color "is-css-hex-color: Determine if a string is a CSS hex color code")