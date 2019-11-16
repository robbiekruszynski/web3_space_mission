import React from "react";

function GameOver(props) {
  let output = "";
  if (props.happyEnd) {
    output =
      "The engines rumble, and you ease the ship into hyperdrive. The stars melt away.";
    //What took you so long?? A colleagues shouts as you land. We have been waiting for this load for time time now! If only you knew.... Well, it's doesnt matter now, save you story for another time. This will finally finish the raygun we made to destory the plant Earth, I suppose a congragulations is in order but we don't have the time for that right now. Dismissed.
  } else {
    output =
      "Time runs out, the lights flicker one last time before you hear the ship power down...";
  }
  return (
    <div className="gameOver">
      <div id="prompt">
        <h1>{output}</h1>
        <p>Score: {props.score}</p>
        <p onClick={() => window.location.reload()}>Play again?</p>
      </div>
    </div>
  );

}

export default GameOver;
