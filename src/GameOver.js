import React from "react";

class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let output = "";
    if (this.props.happyEnd) {
      output =
        "The engines rumble, and you ease the ship into hyperdrive. The stars melt away. What took you so long?? A colleagues shouts as you land. We have been waiting for this load for time time now! If only you knew.... Well, it's doesnt matter now, save you story for another time. This will finally finish the raygun we made to destory the plant Earth, I suppose a congragulations is in order but we don't have the time for that right now. Dismissed.";
    } else {
      output = "Time runs out, and the ship crumbles to pieces around you.";
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
