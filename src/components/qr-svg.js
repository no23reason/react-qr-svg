import React from 'react';
import PropTypes from 'prop-types';

const QRCodeImpl = require('qr.js/lib/QRCode');
const ErrorCorrectLevel = require('qr.js/lib/ErrorCorrectLevel');

let warningFired = false;

export function QRCode({
    value = '',
    size,
    level = 'L',
    bgColor = '#FFFFFF',
    fgColor = '#000000',
    ...otherProps
} = {}) {
    if (size && !warningFired) {
        /* eslint-disable no-console */
        console.warn('The \'size\' prop is deprecated and will be removed in the next major version. Please use the \'style\', \'className\' or \'width\' props to size the code.');
        /* eslint-enable no-console */
        warningFired = true;
    }
    // adapted from https://github.com/zpao/qrcode.react/blob/master/src/index.js
    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(value);
    qrcode.make();

    const cells = qrcode.modules;

    return (<svg shapeRendering="crispEdges" viewBox={[0, 0, cells.length, cells.length].join(' ')} width={size} {...otherProps}>
        {
            cells.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <rect height={1}
                        style={{ fill: cell ? fgColor : bgColor }}
                        width={1}
                        x={colIndex}
                        y={rowIndex}
                    />
                )))
        }
    </svg>);
}

QRCode.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.number,
    level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
};
