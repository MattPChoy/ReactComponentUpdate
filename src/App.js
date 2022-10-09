import './App.css';
import Display from "./components/display"
import Buttons from "./components/actor"
import React from "react";

class App extends React.Component {


  state = {
      lastClicked: 1234
  }

  render() {
      const clickHandler = (v) => {
          console.log(v.target.id);
          this.setState({lastClicked: v.target.id})
      }
      return (
          <div>
                <p>hello</p>
                <Buttons elements={[1, 2, 3, 4, 5]} handler={clickHandler}/>
                <Display data={this.state.lastClicked}/>
          </div>
  )};
}

export default App;
