import React from "react";
import { QRCode } from "../src/index";

class Demo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value:
                "Try changing the values and see the code update in real-time!",
            level: "L",
            bgColor: "#FFFFFF",
            fgColor: "#000000",
        };
    }

    updateValue = e => this.setState({ ...this.state, value: e.target.value });
    updateLevel = e => this.setState({ ...this.state, level: e.target.value });
    updateBgColor = e =>
        this.setState({ ...this.state, bgColor: e.target.value });
    updateFgColor = e =>
        this.setState({ ...this.state, fgColor: e.target.value });

    render() {
        const {
            state,
            updateValue,
            updateLevel,
            updateBgColor,
            updateFgColor,
        } = this;
        return (
            <div>
                <form className="pure-form pure-form-stacked">
                    <fieldset>
                        <div className="pure-g">
                            <div className="pure-u-1">
                                <label htmlFor="value">Value</label>
                                <textarea
                                    className="pure-input-1"
                                    id="value"
                                    onChange={updateValue}
                                    type="text"
                                    value={state.value}
                                />
                            </div>
                            <div className="pure-u-1-3">
                                <label htmlFor="level">Level</label>
                                <select id="level" onChange={updateLevel}>
                                    <option value="L">L</option>
                                    <option value="M">M</option>
                                    <option value="Q">Q</option>
                                    <option value="H">H</option>
                                </select>
                            </div>
                            <div className="pure-u-1-3">
                                <label htmlFor="fgColor">Foregroud</label>
                                <input
                                    id="fgColor"
                                    onChange={updateFgColor}
                                    type="color"
                                    value={state.fgColor}
                                />
                            </div>
                            <div className="pure-u-1-3">
                                <label htmlFor="bgColor">Background</label>
                                <input
                                    id="bgColor"
                                    onChange={updateBgColor}
                                    type="color"
                                    value={state.bgColor}
                                />
                            </div>
                        </div>
                    </fieldset>
                </form>
                <div className="qrcode">
                    <QRCode
                        bgColor={state.bgColor}
                        fgColor={state.fgColor}
                        level={state.level}
                        style={{ width: 500 }}
                        value={state.value}
                    />
                </div>
            </div>
        );
    }
}

export default Demo;
