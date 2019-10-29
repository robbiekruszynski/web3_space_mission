import React from "react";
import Time from "./Time";

function Hud() {
  return (
    <div id="hud">
      <Time />
      <p id="gas">100</p>
      <div id="rateDiv">
        <p id="increase">+</p>
        <p>Gas: <span id="rate">1</span></p>
        <p id="decrease">-</p>
      </div>
    </div>
  );
}

export default Hud;
