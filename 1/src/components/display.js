import React from "react";

export function Display(props){
    return <p>{props.data}</p>
}

export class DisplayClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>{this.props.data}</p>
    }
}
