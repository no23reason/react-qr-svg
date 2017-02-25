import React/*, {Component, PropTypes}*/ from 'react';

const QRCodeImpl = require('qr.js/lib/QRCode');
const ErrorCorrectLevel = require('qr.js/lib/ErrorCorrectLevel');

export function QRCode(props) {
    const {value, level} = props;

    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(value);
    qrcode.make();

    const cells = qrcode.modules;
    return <svg height={300} width={300}>
        {
            cells.map((row, rowIndex) => row.map((cell, colIndex) => <rect style={{ fill: cell ? '#000' : '#FFF' }} height={10} width={10} x={colIndex * 10} y={rowIndex * 10} />))
        }
    </svg>;
}
