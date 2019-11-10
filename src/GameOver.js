import React from "react";

class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="prompt">
        <h1 className="lostScreen">You Lose</h1>
        <p className="lostScore">Score: {this.props.score}</p>
      </div>
    );
  }
}

export default GameOver;
