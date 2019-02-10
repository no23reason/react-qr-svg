import * as React from "react";
import { QRCode } from "../..";

interface IDemoProps {
    text: string;
}

class Demo extends React.Component<IDemoProps> {
    render(): JSX.Element {
        return (
            <div>
                <QRCode
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="M"
                    value={this.props.text}
                />
                <QRCode value="Only value here" />
                <QRCode value="Style here" style={{ width: 250 }} />
                <QRCode value="CSS styling" cellClassPrefix="foo" />
            </div>
        );
    }
}
