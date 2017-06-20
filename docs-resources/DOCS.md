### Features
  * Vector-based — the code is rendered as a SVG
  * Print-friendly — the code does not get blurry when printed
  * Supports TypeScript — the typings are included in the project

### How to get it
It's on [npm](https://www.npmjs.com/package/react-qr-svg), just do
```js
npm install react-qr-svg
```

### How to use it
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

For the complete API documentation and more, please see the  [README](https://github.com/no23reason/react-qr-svg/blob/master/README.md).
