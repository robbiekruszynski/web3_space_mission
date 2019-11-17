import React from "react";

function Hud(props) {
  return (
    <div id="hud">
      <p id="time" key={props.time}>{props.time.toPrecision(2)}</p>
      <div id="rateDiv">
      </div>
    </div>
  );

}

export default Hud;
