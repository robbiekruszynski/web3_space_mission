import React from "react";
import Splash from "./Splash.js";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedEnter: false
    };
  }

  onKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      this.enterGame();
    }
  }

  enterGame() {
    this.setState({ clickedEnter: true });
  }
  render() {
    if (!this.state.clickedEnter) {
      return (
        <div 
          className="Splash"
          tabIndex="0"
          onKeyDown={(e) => this.onKeyDown(e)}
          >
          <div>
            <h1 className="title">Web3 StarJumper</h1>
            <p className="createdBy"> Robbie Kruszynski & Travis Toal</p>
            <div className="button">
              <button
                onClick={() => this.enterGame()}
                className="animated fadeIn delay-2s"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="Splash">
          <Splash>Loading...</Splash>
        </div>
      );
    }
  }
}

export default App;
