import React from "react";

class GameOver extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }

  }
  render() {
    let output = "";
    if (this.props.happyEnd) {
      output = "The engines rumble, and you ease the ship into hyperdrive. The stars melt away as you warp home."
    } else {
      output = "Time runs out, and the ship crumbles to pieces around you."
    }
    return (
    <div id="prompt">
      <h1>{output}</h1>
      <p>Score: {this.props.score}</p>
      <p onClick={() => window.location.reload()}>Play again?</p>
    </div>
    );
  }
}

export default GameOver;
