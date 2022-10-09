import React from "react";

export function Buttons(props) {
    let btns = props.elements.map(e => {
        return <button id={e} key={e} onClick={props.handler}>{e}</button>
    })

    return <div> {btns} </div>
}

export class ButtonClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let btns = this.props.elements.map(e => {
            return <button id={e} key={e} onClick={this.props.handler}>{e}</button>
        })
        return (
            <div> {btns} </div>
        );
    }
}
