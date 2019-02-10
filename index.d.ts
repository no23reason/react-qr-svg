import * as React from "react";

interface QRCodeProps {
    /**
     * The value to encode in the code
     */
    value: string;
    /**
     * QR Error correction level
     */
    level?: "L" | "M" | "Q" | "H";
    /**
     * Color of the bright squares
     */
    bgColor?: string;
    /**
     * Color of the dark squares
     */
    fgColor?: string;
    /**
     * Prefix for the cell CSS classes
     */
    cellClassPrefix?: string;
}

/**
 * The component
 */
export function QRCode(
    props: QRCodeProps & React.SVGProps<SVGElement>,
): React.ReactElement<{}>;
