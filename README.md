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
                    value="some text"
                    size={512}
                    level="Q"
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                />);
    }
}
```

## Props
The props available are (shown with default values):
```js
{
    value: '', // The value to encode in the code
    size: 256, // Size of the code in pixels
    level: 'L', // QR ErrorLevel
    bgColor: '#FFFFFF', // Color of the bright squares
    fgColor: '#000000', // Color of the dark squares
}
```

The `level` prop corresponds to [Error correction level](https://en.wikipedia.org/wiki/QR_code#Error_correction) so the valid values are `L`, `M`, `Q` and `H`.

## Acknowledgements
This project is heavily inspired by the [`qrcode.react`](https://github.com/zpao/qrcode.react) project.

This project uses the [`react-component-boilerplate`](https://github.com/survivejs/react-component-boilerplate).

## License

*react-qr-svg* is available under MIT. See [LICENSE](https://github.com/no23reason/react-qr-svg/tree/master/LICENSE) for more details.
