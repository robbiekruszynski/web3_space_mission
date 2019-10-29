import React from "react";
import Hud from "./Hud";
import Prompt from "./Prompt";
import Choices from "./Choices";

function Body() {
  return (
    <div className="Body">
      <Hud />
      <div id="center">
        <Prompt />
        <Choices />
      </div>
    </div>
  );
}

export default Body;
