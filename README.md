[![build status](https://secure.travis-ci.org/no23reason/react-qr-svg.svg)](http://travis-ci.org/no23reason/react-qr-svg)
[![npm version](https://img.shields.io/npm/v/react-qr-svg.svg)](https://www.npmjs.com/package/react-qr-svg)
[![bitHound Score](https://www.bithound.io/github/no23reason/react-qr-svg/badges/score.svg)](https://www.bithound.io/github/no23reason/react-qr-svg)
[![Dependency Status](https://david-dm.org/no23reason/react-qr-svg.svg)](https://david-dm.org/no23reason/react-qr-svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Greenkeeper badge](https://badges.greenkeeper.io/no23reason/react-qr-svg.svg)](https://greenkeeper.io/)

# react-qr-svg
React component for rendering SVG QR codes

## Demo
Basic demo can be found at the [demo page](https://no23reason.github.io/react-qr-svg/).

## Why SVG?
Most of the existing React components for QR (namely [`qrcode.react`](https://github.com/zpao/qrcode.react), which was used as a starting point for this project) use `<canvas>` for rendering.

This is fine for most scenarios, however when trying to print such code, it gets blurry. This is caused by the fact that `<canvas>` contents get rastered and *then* scaled in the process resulting in the blurriness.

On the other hand, SVG retains the vector information of its contents and therefore is scaled properly when printed.

## Basic Usage

Install using `npm`:
```js
npm install react-qr-svg --save
```

Then use in your application like this:

```js
import React from 'react';
import { QRCode } from 'react-qr-svg';

class Demo extends React.Component {
    render() {
        return (<QRCode
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="Q"
                    style={{ width: 256 }}
                    value="some text"
                />);
    }
}
```

## Props
The props available are (shown with default values):
```js
{
    value: '', // The value to encode in the code
    level: 'L', // QR Error correction level
    bgColor: '#FFFFFF', // Color of the bright squares
    fgColor: '#000000', // Color of the dark squares
}
```

The `level` prop corresponds to [Error correction level](https://en.wikipedia.org/wiki/QR_code#Error_correction) so the valid values are `L`, `M`, `Q` and `H`.

You can also specify all the props that are valid for the `<svg>` React element (e.g. `style`, `className` or `width` which you can use to specify the size of the QR code).

## Acknowledgements
This project is heavily inspired by the [`qrcode.react`](https://github.com/zpao/qrcode.react) project.

This project uses the [`react-component-boilerplate`](https://github.com/survivejs/react-component-boilerplate).

## License

*react-qr-svg* is available under MIT. See [LICENSE](https://github.com/no23reason/react-qr-svg/tree/master/LICENSE) for more details.
