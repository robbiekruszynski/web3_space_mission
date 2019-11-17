import React from "react";

function GameOver(props) {
  let output = "";
  if (props.happyEnd) {
    output =
      `The engines rumble, and you ease the ship into hyperdrive. The stars melt away.\n
      An incoming message comes over your receiver as soon as you land. "What took you so long??" You hurry to hail them. "We've been waiting for this load for some time now!" You begin to retell your journey, but are cut off short. "If only you knew.... Well, it doesnt matter now, save your story for another time. This will finally finish the raygun we made to destroy the invader's home planet. I suppose a congratulations is in order, but we don't have the time for that right now. First, we must prepare to atomize this 'Earth'. Dismissed."`
  } else {
    output =
      "Time runs out, the lights flicker one last time before you hear the ship power down...";
  }
  return (
    <div className="gameOver" id={props.happyEnd ? "win" : "lose"}>
      <div id="prompt">
        <h1>{output}</h1>
        <p>Score: {props.score}</p>
        <p onClick={() => window.location.reload()}>Play again?</p>
      </div>
    </div>
  );

}

export default GameOver;
