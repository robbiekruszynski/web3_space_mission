import React from "react";
import logo from "./logo.svg";
import Splash from "./Splash.js";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enterDiv: (
        <div className="">
          <h1 className="title">Web3 StarJumper</h1>
          <div className="createdBy"> Robbie Kruszynski & Travis Toal</div>
          <div className="button">
            <button
              onClick={() => this.clickCheck()}
              className="animated fadeIn delay-2s"
            >
              Enter
            </button>
          </div>
        </div>
      )
    };
  }

  clickCheck() {
    this.setState({ enterDiv: <Splash>Loading...</Splash> });
  }
  render() {
    return (
      <div className="Splash">
        <div>{this.state.enterDiv}</div>
      </div>
    );
  }
}

export default App;
