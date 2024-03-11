# color-looks-like-rgba &middot; [![Test workflow status](https://github.com/ChrisCodesThings/color-looks-like-rgba/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/color-looks-like-rgba)](https://www.npmjs.com/package/@chriscodesthings/color-looks-like-rgba) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Determine if a set of values could be an RGBA color**

## Install

```sh
npm install --save @chriscodesthings/color-looks-like-rgba
```

## Use

```js
import colorLooksLikeRGBA from '@chriscodesthings/color-looks-like-rgba';

console.log(colorLooksLikeRGBA([100, 149, 237, 1])); // cornflowerblue
// => true
```

## Syntax

```js
colorLooksLikeRGBA(arr);
```

### Parameters

- *arr*: an array containing red, green, blue and (optional) alpha values

### Return Value

Returns true if the values could be an RGBA color, false otherwise.

## Description

Function to determine if a given set of values *could be* an RGBA color. 

The reason we can only say 'looks like', is because it's impossible to be sure. 

Consider these examples:
```
// Valid RGBA colours
[255, 255, 255, 1] // White
[100, 149, 237, 1] // Cornflowerblue
[  0,   0,   0, 1] // Black

// Valid HSL colours
[  0,   0, 100, 1] // White
[219,  79,  66, 1] // Cornflowerblue
[  0,   0,   0, 1] // Black
```

You can see, while there are differences in the allowed range for each value, there is also a lot of crossover. RGBA values are also often valid HSL values and vice versa, but they translate to very different colours. 
