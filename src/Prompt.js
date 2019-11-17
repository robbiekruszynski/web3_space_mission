import React from "react";

function Prompt(props) {
  return (
  <div id="prompt">
    <h1>{props.showQuestion ? props.prompts[props.q] : "Options"}</h1>
  </div>
  );
}

export default Prompt;
