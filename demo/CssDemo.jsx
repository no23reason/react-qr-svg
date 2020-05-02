import React from "react";
import Layout from "./Layout";
import { QRCode } from "../src";

const css = `.my-qr-code-cell {
    opacity: 0.8;
}

.my-qr-code-cell-empty {
    fill: lightgray;
}

.my-qr-code-cell-filled {
    fill: brown;
}`;

const CssDemo = () => (
    <Layout>
        <style>{css}</style>
        <p>CSS used:</p>
        <pre>{css}</pre>
        <p>
            Result with <code>cellClassPrefix=&quot;my-qr-code&quot;</code>:
        </p>
        <div style={{ textAlign: "center" }}>
            <QRCode
                cellClassPrefix="my-qr-code"
                level="L"
                style={{ width: 500 }}
                value="You can use CSS as well!"
            />
        </div>
    </Layout>
);

export default CssDemo;
