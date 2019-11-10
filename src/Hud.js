import React from "react";
import Time from "./Time";

class Hud extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="hud">
        <p id="time" key={this.props.time}>{this.props.time.toPrecision(3)}</p>
        <div id="rateDiv">
        </div>
      </div>
    );
  }
}

export default Hud;
