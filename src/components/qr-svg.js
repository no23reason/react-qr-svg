import React from "react";
import PropTypes from "prop-types";

const QRCodeImpl = require("qr.js/lib/QRCode");
const ErrorCorrectLevel = require("qr.js/lib/ErrorCorrectLevel");

export function QRCode({
    value = "",
    level = "L",
    bgColor = "#FFFFFF",
    fgColor = "#000000",
    ...otherProps
} = {}) {
    // adapted from https://github.com/zpao/qrcode.react/blob/master/src/index.js
    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(value);
    qrcode.make();

    const cells = qrcode.modules;

    let cellIndex = 0; // we use simple order as a key just to avoid the key warning here

    return (
        <svg
            shapeRendering="crispEdges"
            viewBox={[0, 0, cells.length, cells.length].join(" ")}
            {...otherProps}
        >
            {cells.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <rect
                        height={1}
                        key={cellIndex++} // string was too slow here
                        style={{ fill: cell ? fgColor : bgColor }}
                        width={1}
                        x={colIndex}
                        y={rowIndex}
                    />
                )),
            )}
        </svg>
    );
}

QRCode.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.number,
    level: PropTypes.oneOf(["L", "M", "Q", "H"]),
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
};
