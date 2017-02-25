import * as React from 'react';
import { QRCode } from 'react-qr-svg';

interface IDemoProps {
    text: string;
}

class Demo extends React.Component<IDemoProps, {}> {
    render(): React.ReactElement<{}> {
        return <div>
            <QRCode bgColor="#FFFFFF" fgColor="#000000" level="M" size={512} value={this.props.text} />
        </div>;
    }
}
