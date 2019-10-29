import React from "react";
import logo from "./logo.svg";
import Body from "./Body.js";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enterDiv: (
        <div className="button">
          <button
            onClick={() => this.clickCheck()}
            className="animated fadeIn delay-2s"
          >
            Enter
          </button>
        </div>
      )
    };
  }

  clickCheck() {
    this.setState({ enterDiv: <Body>Loading...</Body> });
  }
  render() {
    return (
      <div className="Splash">
        <div className="title">Web3 StarLab</div>
        <div>{this.state.enterDiv}</div>
      </div>
    );
  }
}

export default App;
