import './App.css';
import {Display, DisplayClass} from "./components/display"
import {Buttons, ButtonClass} from "./components/actor"
import React from "react";

class App extends React.Component {
  state = {
      lastClicked: 1234,
      lastClicked2: 5678
  }

  render() {
      const clickHandler = (v) => {
          console.log(v.target.id);
          this.setState({lastClicked: v.target.id})
      }

      const handler2 = (v) => {
          console.log(v.target.id);
          this.setState({lastClicked2: v.target.id})
      }
      return (
          <div>
                <h1> Functional Components Example </h1>
                <Buttons elements={[1, 2, 3, 4, 5]} handler={clickHandler}/>
                <Display data={this.state.lastClicked}/>

                <h1> Class Components Example </h1>
                <ButtonClass elements={[6, 7, 8, 9, 10]} handler={handler2}/>
                <DisplayClass data={this.state.lastClicked2}/>
          </div>
  )};
}

export default App;
