import React, {PropTypes} from 'react';

const QRCodeImpl = require('qr.js/lib/QRCode');
const ErrorCorrectLevel = require('qr.js/lib/ErrorCorrectLevel');

const getCellSize = (index, idealSize) => Math.ceil((index + 1) * idealSize) - Math.floor(index * idealSize);

export function QRCode({
    value = '',
    size = 256,
    level = 'L',
    bgColor = '#FFFFFF',
    fgColor = '#000000',
} = {}) {
    // adapted from https://github.com/zpao/qrcode.react/blob/master/src/index.js
    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(value);
    qrcode.make();

    const cells = qrcode.modules;
    const idealCellSize = size / cells.length;

    return (<svg height={size} shapeRendering="crispEdges" width={size}>
        {
            cells.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                    const cellSize = getCellSize(colIndex, idealCellSize);
                    return (<rect height={cellSize}
                        style={{ fill: cell ? fgColor : bgColor }}
                        width={cellSize}
                        x={colIndex * idealCellSize}
                        y={rowIndex * idealCellSize}
                    />);
                }))
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
