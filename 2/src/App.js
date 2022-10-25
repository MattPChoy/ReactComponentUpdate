import logo from './logo.svg';
import './App.css';
import React from 'react';

class Checkboxes extends React.Component {
    constructor(props) {
        super(props)

        let entryDict = {}
        for (let i in this.props.entries) {
            let e = this.props.entries[i];
            entryDict[e.id] = e;
        }


        this.state = {
            report: {},
            entries: this.props.entries,
            entryDict: entryDict
        }
    }

    updateReportState(e, v) {
        let st = this.state;
        st.report[e.target.id] = v
        this.setState(st)
        console.log("Set " + e.target.id + " to " + v)
        console.log("Report: ")
        console.log(this.state.report)
    }

    render() {
        let entries = this.state.entries;

        let uniqueEntries = {}
        for (let idx in entries) {
            let e = entries[idx];
            let id = e.id;

            uniqueEntries[id] = e;
        }

        let checkboxes = Object.keys(uniqueEntries).map(code => {{
            let e = uniqueEntries[code];
            return (<div key={e.id} id={e.id}>
                <input type="checkbox" key={e.id} id={e.id} onChange={e => {
                    this.updateReportState(e, e.target.checked)
                }}/><span>{e.id}</span>
            </div>);
        }})

        let display = Object.keys(this.state.report).filter(code => {return this.state.report[code] === true}).map(code => {{
            return (<p key={code}> {code} </p>);
        }})

        console.log(display)

        return <div>
            {checkboxes}
            {display}
        </div>
    }
}

function App() {
    let entries = [
        {id: 123456, payload: {a:1, b:2}},
        {id: 154356, payload: {a:1, b:2}},
        {id: 169283, payload: {a:1, b:2}},
        {id: 196843, payload: {a:1, b:2}},
        {id: 284674, payload: {a:1, b:2}},
        {id: 284674, payload: {a:2, b:1}},
    ]

    return (
        <div className="App">
        <Checkboxes entries={entries}/>
        </div>
    );
}

export default App;
